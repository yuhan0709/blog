var express = require("express");
var app = express();
var router = require("./controller/router");
// var files = require("./models/files");
//设置模板引擎
app.set("view engine","ejs");
//静态文件夹
app.use(express.static("./public"));
app.get("/login",router.showBackLogin);
app.get("/backstage",router.showBack);
app.get("/esseyCatalog",router.esseyCatalog);
app.get("/essey/:title",router.getEssey);
app.get("/otherEsseyCatalog",router.oesseyCatalog);
app.get("/otherEssey/:title",router.getOtherEssey);
app.post("/backstage",router.doPost);
app.listen(8000);
