const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
var jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: true }));

// template enginie

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


app.use(express.static(__dirname + '/public'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('client/index.ejs');
});

/*==================================================*/
const adminRouters = require('./routes/admin');
app.use('/admin', adminRouters);


/*==================================================*/



app.listen(port,() => {
    console.log(`Server is running on port: http://127.0.0.1:${port}`);
});