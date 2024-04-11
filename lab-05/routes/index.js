const express = require('express');
const router = express.Router();
const PostController = require("../controllers/PostController");


/* GET home page. */
router.get('/', PostController.getPosts);

router.post('/', PostController.createPost);

module.exports = router;
