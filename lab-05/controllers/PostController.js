const Post = require('../models/Post');


exports.getPosts = (req, res, next) => {
    Post.getAll(function (posts) {
        res.status(200).json({
            messages: "Danh sach Bai Viet ",
            comment:"hihihii",
            data: posts
        });
    })
    
}

exports.createPost = (req, res, next) => {
    const file = req.file;
    let post = {
        name: req.body.name,
        content: req.body.content
       
    }
    Post.create(post, function (posts) {
        res.status(200).json({
            data: posts
        })
    });
};

