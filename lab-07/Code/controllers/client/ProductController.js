const ProductModel = require("../../models/Product");

exports.singleProduct = (req, res, next) => {
    let productId = req.params.id;

    if(isNaN(id)){
        res.render("")
    }
    ProductModel.getOne(function(data){
        res.render('client/product/single', {
            pageTitle: data.name,
            path: 'client/pages/single',
            data: data
        })
    })
}