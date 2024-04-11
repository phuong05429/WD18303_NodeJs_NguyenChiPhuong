// const mysqli = require('mysql');

// const db = mysqli.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'mysql',
//     database: 'nodejs_cp',
// })


// // Truy van database

// app.get('/', (req, res) => {
//     let sql = `SELECT * FROM products`;
//     db.query(sql, function (err, data) {
//         if (err) {
//             throw err;
//         }
//         res.render('home.ejs', { products: data }); 
//     });
// });



const express = require('express');
const mysqli = require('mysql');
const multer = require('multer');
const fs = require('fs'); // Thêm định nghĩa cho biến fs


const app = express();
const bodyParser = require('body-parser');

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

// Khởi tạo kết nối với cơ sở dữ liệu
const db = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs_cp',
});

// Kết nối vào cơ sở dữ liệu
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});

// Route để hiển thị trang All
app.get("/all-product",(req,res)=>{
    let sql = `SELECT * FROM products;`;
    db.query(sql, function(err, data) {
        if (err) throw err;
        res.render('all',{products:data});
    });
});

// Route để hiển thị trang Home
app.get("/",(req,res)=>{
    let sql = `SELECT * FROM products;`;
    db.query(sql, function(err, data) {
        if (err) throw err;
        res.render('home',{products:data});
    });
});


// Route để hiển thị hình ảnh
app.get('/image/:id', (req, res) => {
    const id = req.params.id;
    let sql = `SELECT * FROM products WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        const imagePath = result[0].image_path; // Đường dẫn tới hình ảnh từ cơ sở dữ liệu
        fs.readFile(imagePath, (err, data) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'image/jpg' });
            res.end(data);
        });
    });
});

// Route để hiển thị sản phẩm theo loại
app.get("/shop/:categories_id", (req, res) => {
    let cateId = req.params.categories_id; // Sửa lại tên biến thành categories_id
    let sql = `SELECT * FROM products WHERE categories_id=${cateId};`;
    db.query(sql, function(err, data) {
        if (err) throw err;
        res.render('home', { products: data }); // Đảm bảo bạn truyền đúng tên biến vào template

    });
});



const PORT = process.env.PORT || 3800;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
