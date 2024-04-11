const express = require("express");
const multer = require("multer");

const ProductController = require ("../controllers/api/ProductController");
const UserController = require ("../controllers/api/UserController");

const upload = multer({ dest: './public/data/uploads/' })
const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getOneProduct);
router.post('/products',upload.single('image') , ProductController.postProduct);
router.put('/products/:id', upload.single('image'), ProductController.updateProduct);


router.post('/users' , UserController.signUpUser) ; 

module.exports=router;