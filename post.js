const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    content:{
        type:String,
        require:true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    // include the array of ids of all comments in this post schema
    comment:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Comment'

    }]

},{
    timestamps:true
}

);
//define as model
const Post = mongoose.model('Post',postSchema);
//export lib 
module.exports = Post;