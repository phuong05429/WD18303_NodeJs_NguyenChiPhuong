const products = [];

exports.getAddProduct = (req, res, next) => {
   res.render('admin/product/add', {
    pageTitle: 'Them san pham',
    path: 'admin/product/add',
    activeAddProduct: true
   })
}

exports.getProducts = (req, res, next) => {
   res.render('admin/product/list', {
    pageTitle: 'Danh sach san pham',
    path: 'admin/product/list',
    activeAddProduct: true
   })
}