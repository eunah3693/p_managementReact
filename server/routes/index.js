var express = require("express");
var router = express.Router();
const bodyParser = require("body-parser");
const mysql = require("mysql"); // mysql 모듈 사용
var connection = mysql.createConnection({
    host : "localhost",
    user : "root", //mysql의 id
    password : "KKoj248624!", //mysql의 password
    port:3306,
    database : "test", //사용할 데이터베이스
});

connection.connect();
router.get('/', (req,res) => {
    const test = req.body.test;
    // console.log(req.body);
    connection.query('SELECT * from test', (error, rows) => {  //쿼리문 
        if (error) throw error;
        res.send("dd");
      });
})
module.exports = router;