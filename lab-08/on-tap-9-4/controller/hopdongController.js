const HopDong = require("../models/hop-dong");

exports.getHopDong = (req, res) => {
  HopDong.getAll(function (hopDong) {
    res.status(200).json({
      messages: "Danh sach hop dong ne ",
      comment: "hihihii",
      data: hopDong,
    });
  });
};

exports.postHopDong = (req, res, next) => {
    const currentDate = new Date();
    const contractDate = new Date(req.body.contractDate); // Giả sử ngày ký hợp đồng được gửi trong body của yêu cầu
  
    // Kiểm tra ngày ký hợp đồng phải lớn hơn ngày hiện tại
    if (contractDate < currentDate) {
      return res.status(400).json({ error: "Ngày ký hợp đồng phải lớn hơn ngày hiện tại." });
    }else{
        let hopdong = {
            ten_nguoi_mua: req.body.ten_nguoi_mua,
            ten_nguoi_ban: req.body.ten_nguoi_ban,
            gia_tien: req.body.gia_tien,
            ngay_ky: req.body.ngay_ky,
            trang_thai: req.body.trang_thai
          };
    
    
  
    // Tạo hợp đồng
    HopDong.create(hopdong, function (err, newHopDong) {
      if (err) {
        return res.status(500).json({ error: "Có lỗi xảy ra khi tạo hợp đồng." });
      }
  
      res.status(200).json({
        data: newHopDong,
      });
    });
    next();
}
};
  

exports.getOneHopDong = (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  // kiem tra id co phai la so hay khong
  if (isNaN(id)) {
    return res.status(400).json({
      message: "id nay khong ton tai! ",
      data: [],
    });
  }

  // lay ra 1 thanh cong
  HopDong.getOne(id, function (hopdong) {
    res.status(200).json({
      messages: "thanh cong ! ",
      data: hopdong,
    });
  });
};

exports.updateHopDong = (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "id nay khong ton tai!",
      data: [],
    });
  }
  let hopdong = {
    ten_nguoi_mua: req.body.ten_nguoi_mua,
    ten_nguoi_ban: req.body.ten_nguoi_ban,
    gia_tien: req.body.gia_tien,
    ngay_ky: req.body.ngay_ky,
    trang_thai: req.body.trang_thai,
  };

  // Cập nhật sản phẩm trong cơ sở dữ liệu
  HopDong.update(id, hopdong, function (hopdong) {
    res.status(200).json({
      messages: "Update Thanh cong !",
      data: hopdong,
    });
  });
};

exports.deleteHopDong = (req, res, next) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    return res.status(400).json({
      message: "id nay khong ton tai!",
      data: [],
    });
  }

  HopDong.delete(id, function (err, result) {
    if (err) {
      return res.status(500).json({
        message: "Delete Thanh cong !",
        error: err,
      });
    }

    if (!result) {
      return res.status(404).json({
        message: "Product not found",
      });
    }
  });
};
