const db = require('./Database');

module.exports = class Post{
    static getAll(callback) {
        let sql = `SELECT * FROM posts`;
        db.query(sql, function(err, data) {
            if (err) {
                throw err;
            }
            callback(data);
        });
    }

    static create(newPost,callback) {
        db.query('insert into posts SET ?', newPost, function(err, data) {
            if (err){
                callback(err,null);
            }else{
                callback(data,newPost);
            }
        });
    }
    
};