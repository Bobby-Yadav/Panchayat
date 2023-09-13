//call user from models 
const User = require('../models/user');

module.exports.profile = function(req, res){



    //console.log("fiiiiiiiiii");
    User.findById(req.params.id, function(err, user){
        return res.render('user_profile', {
            title: 'User Profile',
            profile_user: user,

        });

    });
    
}

module.exports.update = function(req,res){
    if(req.user.id == req.params.id){
        User.findByIdAndUpdate(req.params.id,
            {name: req.body.name,
            email: req.body.email} ,

            function(err,user){
                return res.redirect('back');
            })
    }else{
        res.status(401).send('unauthorised');
    }
}

// to render the sign up page 
module.exports.signUp=function(req,res){
    if (req.isAuthenticated()){
        return res.redirect('/user/profile');
    }

    return res.render('user_sign_up',{
        title:"Panchayat | Sign Up"
    });
}

//to render the sign in page 
module.exports.signIn=function(req,res){
     if (req.isAuthenticated()){
        return res.redirect('/user/profile');
     }

    return res.render('user_sign_in',{
        title:"Panchayat | Sign In"
    });
}

// to get sign up data
module.exports.create =async function(req,res){
    if (req.body.password != req.body.confirm_password){
        return res.redirect('back');
    }

    const user=await User.findOne({email: req.body.email})

        if (!user){
            await User.create(req.body)
                return res.redirect('/user/sign-in');
            
        }else{
            return res.redirect('back');
        }
    
    
}




// to get signed in 
module.exports.createSession = function(req,res){

    req.flash("success", " logged in succesfully");
    return res.redirect('/');
    
}


// set up sign out functionalities 
module.exports.destroySession = function(req,res){
    

    req.logout(function(err){
        if(err){
            console.log("error in logout ",err);
            return res.redirect('back');
        };

        req.flash("success", " logged out succesfully");
        
        return res.redirect('/');
    });

    // return res.redirect('/');
}

