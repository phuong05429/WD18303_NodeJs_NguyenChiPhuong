// const db = require('./Database.js');

// let products = [];

// module.exports = class Product {

//     static getAll(callback) {
//         let sql = `SELECT * FROM products`;
//         db.query(sql, function (err, data) {
//             if (err) throw err;
//             callback(data);
//         });
//     }


//     static getOne(id, callback) {
//         let sql = `SELECT * FROM products WHERE id = ${id}`;
//         db.query(sql, function (err, data) {
//             if (err) throw err;
//             callback(data);
//         });
//     }


//     //tự nghiên cái query builder , sử dụng tính chất kế thừa để tạo ra các phương thức truy vấn db chung
//     // static getById(id) {
//     //     let sql = `SELECT * FROM products`;
//     // }

//     static create(newProduct, callback) {
//         db.query('insert into products SET ?', newProduct, function (err, data) {
//             if (err) {
//                 callback(err, null); // Trả về lỗi nếu có lỗi xảy ra
//             } else {
//                 callback(data, newProduct); // Trả về true nếu thêm bài viết thành công
//             }
//         })
//     }


//     static update(id, data, callback) {
//         db.query(`UPDATE products SET ? WHERE id = ${id}`, data, function (err, product) {
//             if (err) {
//                 callback(err, null);
//             } else {
//                 callback(data, product);
//             }
//         })
//     }


//     // static delete(id) {
//     //     let sql = `SELECT * FROM products`;
//     // }

// }

const sequelize = require('./Database.js');
// const { type } = require('express/lib/response');
const { Sequelize , DataTypes} = require('sequelize');

const Product = sequelize.define('products', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: Sequelize.STRING,
    image: Sequelize.STRING,
    price: DataTypes.INTEGER,
    sale_price: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
}, {
  timestamps: false
})

module.exports = Product;