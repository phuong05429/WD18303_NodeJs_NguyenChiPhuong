const Category = require('../models/Categories');




exports.getCategories = function(req, res) {
    // Lấy tất cả các danh mục từ cơ sở dữ liệu
    Category.getAll()
        .then(categories => {
            res.render('admin/categories/listCategories.ejs', { categories: categories });
        })
        .catch(err => {
            // Xử lý lỗi nếu có
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
};


exports.addCategories = function(req, res) {
    // Lấy tất cả các danh mục từ cơ sở dữ liệu
    Category.getAll()
        .then(categories => {
            res.render('admin/categories/addCategory.ejs', { categories: categories });
        })
        .catch(err => {
            // Xử lý lỗi nếu có
            console.error(err);
            res.status(500).send('Internal Server Error');
        });
        console.log(req.body)
};



exports.postCategories = function(req, res) {
    const {name} = req.body;

    Category.create(name)
    .then(category => {
        res.redirect('listcate');
        console.log(category);
    })
    .catch(err => {
        // Xử lý lỗi nếu có
        console.error(err);
        res.status(500).send('Internal Server Error');
    });
};
