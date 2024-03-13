const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const app = express();
const port = 3100;

// Sử dụng bodyParser để xử lý dữ liệu form
app.use(bodyParser.urlencoded({ extended: true }));

// Sử dụng EJS làm template engine
app.set("view engine", "ejs");
app.set("views", "./views");

// Cho phép truy cập các file trong thư mục public
app.use(express.static("public"));

// Khởi tạo multer để xử lý upload file
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/data/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage });

// Danh sách sản phẩm
var listProduct = [
    {
        id: '1',
        name: 'Apple Book',
        price: 3000,
        description: "A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    },
    {
        id: '2',
        name: 'Microsoft Book',
        price: 2000,
        description: "A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    },
    {
        id: '3',
        name: 'VFast Book',
        price: 1000,
        description: " A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    },
    {
        id: '4',
        name: 'Audi Book',
        price: 6000,
        description: " A very interesting book about so many even more interesting things!",
        imageURL: "book.png",
    }
];

// Route để hiển thị trang chủ
app.get("/", (req, res) => {
    res.render('home.ejs', { products: listProduct });
});

// Route để hiển thị trang thêm sản phẩm mới
app.get("/addnew", (req, res) => {
    res.render("add-product.ejs");
});

// Route để xử lý form thêm sản phẩm mới
app.post('/addnew', upload.single('productImage'), (req, res) => {
    // Lấy dữ liệu từ form sau khi upload ảnh
    const file = req.file;
    const { name, price, description } = req.body;
    const nameImage = file.filename;

    // Thêm sản phẩm mới vào danh sách
    const newProduct = {
        id: listProduct.length + 1, // Tính toán ID dựa trên số lượng sản phẩm hiện có
        name: name,
        price: price,
        description: description,
        imageURL: nameImage,
    };
    listProduct.push(newProduct);

    // Chuyển hướng về trang chủ và truyền danh sách sản phẩm mới nhất
    res.render('home', { products: [...listProduct, newProduct] });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
