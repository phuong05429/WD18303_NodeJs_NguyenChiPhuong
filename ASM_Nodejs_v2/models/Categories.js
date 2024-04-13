const db = require('./Database.js');


class Category {
    static getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM categories`;
            db.query(sql, function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }

    static create(name) {
        return new Promise((resolve, reject) => {
            let sql = `INSERT INTO categories (name) VALUES (?)`;
            db.query(sql, [name], function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    
}

module.exports = Category;
