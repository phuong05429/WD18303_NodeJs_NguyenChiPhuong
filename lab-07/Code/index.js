const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const mysql = require("mysql");


const app = express();
const port = 3300;
let jsonParser = bodyParser.json();
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


app.set('view engine', 'ejs');
app.set('views', './views');
const upload = multer({ dest: './public/data/uploads/' })
app.use(express.static("public"));


const adminRoutes = require('./routes/admin'); 
app.use('/admin', adminRoutes);
const apiRoutes = require('./routes/api'); 
app.use('/api', apiRoutes);
const clientRoutes = require('./routes/client'); 
app.use('/', clientRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port http://127.0.0.1:${port}`);
});

