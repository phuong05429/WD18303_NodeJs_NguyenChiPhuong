const db = require('./Database.js'); // Assuming db.js is in the same directory


module.exports = class HopDong {
    static getAll(callback) {
        let sql = `SELECT * FROM hop_dong`;
        db.query(sql, function(err, data) {
            if (err) {
                throw err;
            }
            callback(data);
        });
    }


    static create(newHopDong,callback) {
        db.query('insert into hop_dong SET ?', newHopDong, function(err, data) {
            if (err){
                callback(err,null);
            }else{
                callback(data,newHopDong);
            }
        });
    }

    static getOne(id,callback) {
        let sql = `SELECT * FROM hop_dong WHERE id = ${id}`;
        db.query(sql, function(err, data) {
            if (err) {
                throw err;
            }
            callback(data);
        });
    }

    static update(id, data, callback) {
        db.query(`UPDATE hop_dong SET ? WHERE id = ${id}`, data, function(err, product) {
            if (err) {
                throw err;
            }
            callback(product);
        }); 
    }


    static delete(id,callback) {
        let sql = `DELETE FROM hop_dong WHERE id = ${id}`;
        db.query(sql, function(err, data) {
            if (err) {
                throw err;
            }
            callback(data);
        });
    }

};


