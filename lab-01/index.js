const express = require("express");
var bodyParser = require('body-parser')
const app = express();
const port = 3300;
// app.use(bodyParser.urlencoded());
var jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded());
const Listproduct = [];
const CommentProduct = [];

// Middleware to parse the body of POST requests
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Day la trang home!");
});

// app.get("/product", (req, res) => {
//   res.send("Day la trang product!");
// });

// GET request to show the form
app.get("/add-product", (req, res) => {
  res.send(`
  <h1>Day la trang add-product!<h1>
  <form action="/product" method="POST">
        <input type="text" placeholder="Product" name="product">
        <button type="submit">Add product</button>
    </form>
  `);
});

// POST request to handle form submission
app.post("/product", jsonParser, function (req, res)  {
  console.log(req.body.product);
  Listproduct.unshift(req.body.product);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});







//data nha khoa hoc
const inventors = [
  { id: 1, first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { id: 2, first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { id: 3, first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { id: 4, first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { id: 5, first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { id: 6, first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
];

app.get('/inventors', (req, res) => {
    let list='<h2>Danh sách nhà khoa học<ul>';
    inventors.forEach(e => {
    list+=`<li><a style="text-decoration:none;color:green;" href="/inventor/${e.id}">${e.last}</a></li>`;
    });
    list+='</ul></h2>';
    res.send(list);
   });

 app.get('/inventor/:id', (req, res) => {
    let id=req.params.id;
    inventor=inventors.find(e=>e.id==id);
    info=`<h2>Thông tin chi tiết nhà khoa học:Full name: ${inventor.first} ${inventor.last}, Year: ${inventor.year}, 
   Passed: ${inventor.passed}</h2>`;
    res.send(info);
   });

   app.get('/add-inventor', (req, res) => {
    res.send(` <h1>Thêm Nhà Khoa Học</h1>
    <form action="/inventor" method="POST">
    <input type="text" name="first" placeholder="input first name">
    <input type="text" name="last" placeholder="input last name"><br>
    <input type="number" name="year" placeholder="Year">
    <input type="number" name="passed" placeholder="passed"><br>
    <button type="submit">Add Product</button>
   </form>
   `)});

   app.post('/inventor', (req, res) => {
    let newInventor=req.body;
    newInventor.id=inventors.length+1;
    inventors.push(newInventor);
    res.redirect('/inventors');
   });
   




   // bai tap them 1.5 

   // data products
   const product = [
    {id: 1, name: "Product1", price: 100,description: "Product-good", descriptionDetails: "Product-good-details",image: "image/pokemon-01.jpg"},
    {id: 2, name: "Product2", price: 200,description: "Product-good", descriptionDetails: "Product-good-details",image: "image/pokemon-02.jpg"},
    {id: 3, name: "Product3", price: 300,description: "Product-good", descriptionDetails: "Product-good-details",image: "image/pokemon-03.jpg"},
    {id: 4, name: "Product4", price: 400,description: "Product-good", descriptionDetails: "Product-good-details",image: "image/pokemon-04.jpg"},
    {id: 5, name: "Product5", price: 500,description: "Product-good", descriptionDetails: "Product-good-details",image: "image/pokemon-05.jpg"},


   ];

   app.get('/products', (req, res) => {
    let list='<h2>Danh sách san pham pokemon<ul>';
    product.forEach(p => {
    list+=`
    <li><a style="text-decoration:none;color:blue;" href="/product/${p.id}">${p.name}</a></li>

    `;
    });
    list+='</ul></h2>';
    res.send(list);
   });

   // Đoạn mã JavaScript của bạn

// Trong hàm xử lý route '/product/:id'
app.get('/product/:id', (req, res) => {
  let id = req.params.id;
  let selectedProduct = product.find(p => p.id == id);

  if (!selectedProduct) {
      res.status(404).send('Không tìm thấy sản phẩm');
  } else {
      let info = `
          <style>
              body {
                  font-family: Arial, sans-serif;
                  background-color: #f0f0f0;
                  color: #333;
                  padding: 20px;
              }

              h2 {
                  color: #007bff;
              }

              ul {
                  list-style: none;
              }

              a {
                  text-decoration: none;
                  color: green;
              }

              a:hover {
                  text-decoration: underline;
              }

              form {
                  margin-top: 20px;
              }

              label {
                  display: block;
                  margin-bottom: 5px;
              }

              input[type="number"],
              textarea {
                  width: 100%;
                  padding: 8px;
                  margin-bottom: 10px;
                  border: 1px solid #ccc;
                  border-radius: 5px;
              }

              button[type="submit"] {
                  padding: 10px 20px;
                  background-color: #007bff;
                  color: #fff;
                  border: none;
                  border-radius: 5px;
                  cursor: pointer;
                  transition: background-color 0.3s;
              }

              button[type="submit"]:hover {
                  background-color: #0056b3;
              }
          </style>

          <h2>Chi Tiết Sản Phẩm:</h2>
          <ul>
              <li>Name: ${selectedProduct.name}</li>
              <li>Price: ${selectedProduct.price}</li>
              <li>Description: ${selectedProduct.description}</li>
              <li>Description Details: ${selectedProduct.descriptionDetails}</li>
              <li><img src="${selectedProduct.image}" style="width: 200px; height: auto;"></li>
          </ul>

          <h3>Bình Luận và Đánh Giá:</h3>
          <form action="/comment" method="post">
              <input type="hidden" name="productId" value="${selectedProduct.id}">
              <div>
                  <label for="comment">Bình Luận:</label>
                  <textarea id="comment" name="comment" rows="4" cols="50"></textarea>
              </div>
              <div>
                  <label for="rating">Đánh Giá:</label>
                  <input type="number" id="rating" name="rating" min="1" max="10">
              </div>
              <button type="submit">Gửi Bình Luận và Đánh Giá</button>
          </form>
      `;
      res.send(info);
  }
});



app.post('/comment', (req, res) => {
  let productId = req.body.productId;
  let comment = req.body.comment;
  let rating = req.body.rating;

  // Thực hiện lưu bình luận và đánh giá vào cơ sở dữ liệu hoặc nơi lưu trữ dữ liệu khác
  // Ở đây, chúng ta chỉ in ra các thông tin đã nhận được từ form
  // console.log(`ProductId: ${productId}, Comment: ${comment}, Rating: ${rating}`);

  // res.send('Bình luận và đánh giá của bạn đã được gửi thành công!');
  console.log(req.body.product);
  CommentProduct.unshift(req.body.product);
  res.send(req.body);
});

app.post("/product", jsonParser, function (req, res)  {
  console.log(req.body.product);
  CommentProduct.unshift(req.body.product);
  res.send(req.body);
});
