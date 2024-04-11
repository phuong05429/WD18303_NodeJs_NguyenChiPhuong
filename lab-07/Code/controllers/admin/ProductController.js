const ProductModel = require("../../models/Product");

exports.addProduct = (req, res, next) => {
    res.render('admin/product/add', {
        pageTitle: 'Thêm sản phẩm',
        path: '/admin/product/add',
        activeAddProduct: true
    })
}


exports.getProducts = (req, res, next) => {
    ProductModel.getAll(function(data){
        res.render('admin/product/list', {
            pageTitle: 'Thêm sản phẩm',
            path: 'admin/product/list',
            activeAddProduct: true,
            data: data
        })
    })
}
function setTimeout(callback, timeout) {
    
}
