const express = require("express");

const ProductController = require ("../controllers/admin/ProductController");

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProducts);


module.exports=router;