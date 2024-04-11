// const mysql = require('mysql');
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'bookstore'
// });
// db.connect(function (err) {
//     if (err) throwerr;
//     console.log('Database is connected successfully !');
// });

// module.exports = db;


const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('nodejs_cp', 'root', 'mysql', {
    host: 'localhost',
    dialect: 'mysql'
});
module.exports = sequelize;
