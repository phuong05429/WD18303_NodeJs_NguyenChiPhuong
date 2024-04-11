const Product = require("../../models/Product");


exports.getProducts =  async (req, res, next) => {
    const products = await Product.findAll({
        attributes: ['name']
      });
    res.status(200).json({
        data: products
    });

    // res.send(products);
}
exports.postProduct = async (req, res) => {
    // console.log(req.body.image);
    // let product = {
    //     name: req.body.name,
    //     price: req.body.price,
    //     sale_price: req.body.sale_price,
    //     status: req.body.status,
    //     image: req.file.filename
    // }

    // const productResponse = await Product.create(product, { fields: ['name', 'price', 'sale_price', 'status', 'image'] });
    // res.status(200).json({
    //     data: productResponse
    // });

    // ProductModel.create(product, function(result){
    //     res.status(201).json({
    //         massages: "success",
    //         data: jane
    //     })
    // })
}


exports.getOneProduct = async (req, res, next) => {
    const id = parseInt(req.params.id);
    console.log(id);
    if(isNaN(id)){
        return res.status(404).json({
            "message": "Invalid id",
            "data": []
        })
    }

    const product = await Product.findByPk(id, { 
        attributes: ['name']
    });
    res.status(200).json({
        massages: "success",
        data: product
    })
    //thành công
    // ProductModel.getOne(id, function(data){
    //     res.status(200).json({
    //         massages: "success",
    //         data: data
    //     })
    // })
}

exports.updateProduct = (req, res, next) => {
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(404).json({
            "message": "Invalid id",
            "data": []
        })
    }

    let product = {
        name: req.body.name,
        price: req.body.price,
        sale_price: req.body.sale_price,
        status: req.body.status,
    }
    //thành công
    ProductModel.update(id, product ,function(data){
        res.status(200).json({
            massages: "success",
            data: data
        })
    })
}
