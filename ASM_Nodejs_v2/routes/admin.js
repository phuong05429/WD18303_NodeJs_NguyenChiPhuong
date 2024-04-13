const express = require("express");
const ProductController = require("../controllers/ProductController");
const CategoriesController = require("../controllers/CategoriesController");

// const CategoriesController = require("../controllers/CategoriesController");
const router = express.Router();

// Route để hiển thị danh sách sản phẩm
router.get('/list', ProductController.getProducts);
// // Route để thêm sản phẩm
router.get('/add', ProductController.addProducts);

router.post('/add', ProductController.postProducts);
// router.get('/update', ProductController.postEditProduct);
// /*==================================Cate===*/
router.get('/listcate', CategoriesController.getCategories);
router.post('/addcate', CategoriesController.postCategories);
router.get('/addcate', CategoriesController.addCategories);


module.exports = router;

