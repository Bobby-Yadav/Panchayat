const Comment = require('../models/comments');
const Post = require('../models/post')

module.exports.create = async function(req,res){
    try{
        let post = await Post.findById(req.body.post);
        if(post){
            let comment = await Comment.create({
                content:req.body.content,
                post: req.body.post,
                user:req.user._id
            }); 
                //handle err
            post.comment.push(comment);
            post.save();

            res.redirect('/');
        } 
    

    }catch(err){
        console.log("Error",err);
    }


}

module.exports.destroy =async  function(req,res){
    let comment =await Comment.findById(req.params.id );
    try{
        
    if(comment.user== req.user.id){

        let postId = comment.post

        comment.remove();

        Post.findByIdAndUpdate(postId, {$pull:{comments:req.params.id}} );

        return res.redirect('back')
        
    }else{
        return res.redirect('back')
    }

    }catch(err){
        console.log('Error', err);
        return;

    }

}

 