/* Database */
const mysqli = require('mysql');

const db = mysqli.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql',
    database: 'nodejs_cp',
})


module.exports = db;
