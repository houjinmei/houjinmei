var express = require('express');
var router = express.Router();
// const fs= require("fs");
// const path =require("path");
var data=require("../data.json") ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/data",(req,res,next)=>{
  // var data=fs.readFileSync(path.resolve(__dirname),"utf-8");
  // res.setHeader("Access-Control-Allow-Origin","*")
  res.json(JSON.parse(data))
})
module.exports = router;
