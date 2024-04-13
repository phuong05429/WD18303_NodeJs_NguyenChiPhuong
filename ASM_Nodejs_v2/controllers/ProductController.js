const Product = require('../models/Products');


exports.getProducts = function(req, res) {
    Product.getAll()
        .then(products => {
            res.render('admin/products/listProduct.ejs', { products: products });
        })
        .catch(err => {
            // Xử lý lỗi nếu có
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};

exports.addProducts = function(req, res) {
    Product.getAll()
        .then(products => {
            res.render('admin/products/addProduct.ejs', { products: products });
        })
        .catch(err => {
            // Xử lý lỗi nếu có
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};


exports.postProducts = function(req, res) {
    // Lấy thông tin sản phẩm từ request body
    const { name, price, description } = req.body;

    // Kiểm tra xem các trường thông tin cần thiết đã được cung cấp chưa
    if (!name || !price || !description) {
        return res.status(400).send('Missing required fields');
    }

    // Tạo một đối tượng sản phẩm mới
    const newProduct = {
        name: name,
        price: price,
        sale_price: req.body.sale_price, // Nếu không có sale_price, gán giá trị null
        description: description,
        image: req.body.image, // Nếu không có image, gán giá trị null
        category_id: req.body.category_id  // Nếu không có category_id, gán giá trị null
    };

    // Thêm sản phẩm vào cơ sở dữ liệu
    Product.create(newProduct)
        .then(product => {
            res.redirect('list'); // Điều hướng đến trang danh sách sản phẩm sau khi thêm thành công
        })
        .catch(err => {
            // Xử lý lỗi nếu có
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};


// sửa sản phẩm 

// exports.postEditProduct = function(req, res) {
//     // Lấy thông tin sản phẩm từ request body
//     const { id, name, price, sale_price, describe, image, category_id } = req.body;

//     // Kiểm tra xem các trường thông tin cần thiết đã được cung cấp chưa
//     if (!name || !price || !describe) {
//         return res.status(400).send('Missing required fields');
//     }

//     // Tạo một đối tượng sản phẩm mới
//     const newProduct = {
//         name: name,
//         price: price,
//         sale_price: sale_price,
//         describe: describe,
//         image: image,
//         category_id: category_id
//     };
//     // Sửa sản phẩm vào cơ sở dữ liệu
//     Product.updateProduct(id, newProduct)
//         .then(product => {
//             res.redirect('/admin/products/listProduct.ejs'); // Điều hướng đến trang danh sách sản phẩm sau khi thêm thành công
//         })
//         .catch(err => {
//             // Xử lý lỗi nếu có
//             console.error(err);
//             res.status(500).send('Internal Server Error');
//         });
// };