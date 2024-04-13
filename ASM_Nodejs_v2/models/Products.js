const db = require('./Database.js');


class Product {
    static getAll() {
        return new Promise((resolve, reject) => {
            let sql = `SELECT * FROM products`;
            db.query(sql, function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }


    static create(name, price, sale_price, description, image, category_id) {
        return new Promise((resolve, reject) => {
            let sql = 'INSERT INTO products (name, price, sale_price, `description`, image, category_id) VALUES (?, ?, ?, ?, ?, ?)';
            db.query(sql, [name, price, sale_price, description, image, category_id], function(err, data) {
                if (err) {
                    reject(err);
                }
                resolve(data);
            });
        });
    }
    

    // static updateProduct(id, name, price, description, image, category) {
    //     return new Promise((resolve, reject) => {
    //         let sql = `UPDATE products SET name = '${name}', price = '${price}', description = '${description}', image = '${image}', category = '${category}' WHERE id = ${id}`;
    //         db.query(sql, function(err, data) {
    //             if (err) {
    //                 reject(err);
    //             }
    //             resolve(data);
    //         });
    //     });
    // }
    // // lọc sản phẩm theo phân loại
    // static filterByCategory(id) {
    //     return new Promise((resolve, reject) => {
    //         let sql = `SELECT * FROM products WHERE category = ${id}`;
    //         db.query(sql, function(err, data) {
    //             if (err) {
    //                 reject(err);
    //             }
    //             resolve(data);
    //         });
    //     });
    // } 

};

module.exports = Product;

    // // xóa sản phẩm
    // static deleteProduct(id) {
    //     return new Promise((resolve, reject) => {
    //         let sql = `DELETE FROM products WHERE id = ${id}`;
    //         db.query(sql, function(err, data) {
    //             if (err) {
    //                 reject(err);
    //             }
    //             resolve(data);
    //         });
    //     });
    // }
    // // cập nhật sản phẩm
    



