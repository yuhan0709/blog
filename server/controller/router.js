var files = require('../models/files');
var formidable =  require("formidable");
var fs = require("fs");
var path = require("path");
//渲染登录页面
exports.showBackLogin = (req,res)=>{
    res.render("login");
}
//渲染后台管理系统
exports.showBack = (req,res)=>{
    res.render("backstage");
}
//获取目录
exports.esseyCatalog = (req,res)=>{
  files.showEsseyCatalog((catalog)=>{
    res.send(catalog);
  });
}
//获取文章
exports.getEssey = (req,res)=>{
  var title = req.params.title;
  files.showEssey(title,(essey)=>{
    res.send(essey);
  })
}
//获取目录
exports.oesseyCatalog = (req,res)=>{
  files.showOtherEsseyCatalog((catalog)=>{
    res.send(catalog);
  })
}
//获取杂记内容
exports.getOtherEssey = (req,res)=>{
  var title = req.params.title;
  files.showOtherEssey(title,(otherEssey)=>{
    res.send(otherEssey);
  })
}
//上传表单
exports.doPost = (req,res)=>{
  var form = new formidable.IncomingForm();
  form.uploadDir = path.normalize(__dirname+"/../uploads/");
  // console.log(form.uploadDir);
  form.parse(req,function(err,fields,files){
    // console.log(files.upfile.name);
    var oldpath = files.upfile.path;
    var esseydir = fields.checkessey;
    var newpath = path.normalize(__dirname+"/../"+esseydir+"/"+files.upfile.name);
    console.log(newpath);
    fs.rename(oldpath,newpath,function (err){
      if(err){
          throw Error("filed");
      }
      res.end("success");
    })
  })
}