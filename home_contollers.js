const Post = require('../models/post');
const User = require('../models/user');


module.exports.home = async function(req,res){
    // console.log(req.cookies);
    // res.cookie("cukiiii",707);

    // Post.find({} , function(err,posts){
    //     return res.render('home',{
    //         title:"Panchayat |  Home",
    //         posts: posts
    //     });

    // });

    try{
        let posts = await Post.find({})
        .populate('user')
        .populate({
            path:'comment',
            populate:{
            path: 'user'
            }
        });

    

        let users =await User.find({});
        
            
            return res.render('home',{
                title:"Panchayat |  Home",
                posts: posts,
                all_users: users,
            });   

        
    }catch(err){
        console.log("error",err);
        return;
    }


 
}   

