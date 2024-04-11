var db = require("./Database.js");

module.exports = class Product {
  constructor() {}
  static saveProduct() {
    //thêm một sản phẩm
  }
  static fetchAll() {
    //trả về tất cả sản phẩm
    let sql = `SELECT * FROM products`;
    db.query(sql, function (err, data) {
      if (err) throw err;
      products = data;
    });
    return products;
  }
};
