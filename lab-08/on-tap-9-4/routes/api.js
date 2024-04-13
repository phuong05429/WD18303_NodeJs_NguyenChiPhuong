const express = require("express");
// const multer = require("multer");
const hopdongController = require("../controller/hopdongController");
// const upload = multer({dest: './public/data/upload'})
const router = express.Router();




// Route để hiển thị danh sách sản phẩm
router.get('/hopdong', hopdongController.getHopDong);

// Route để lay ra 1
router.get('/hopdong/:id', hopdongController.getOneHopDong);
    
  
// Route để thêm sản phẩm
router.put('/hopdong/:id',hopdongController.updateHopDong);

// create router delete
router.delete('/hopdong/:id', hopdongController.deleteHopDong);

// Route để thêm sản phẩm
router.post('/hopdong',hopdongController.postHopDong);




module.exports = router;