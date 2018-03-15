const fs = require("fs");
const markdown = require('marked');
//获取文章目录
exports.showEsseyCatalog = (callback)=>{
  var esseyCatalog = [];
  fs.readdir("./essey",(err,files)=>{
    if(err){
      console.log(err)
    }else{
      files.forEach(filename=>{
        esseyCatalog.push(filename.split(".")[0]);
      })
      callback(esseyCatalog);
    }
  })
}
//获取文章内容
exports.showEssey = (title,callback)=> {
  var esseyTitle = title+".md";
  fs.readFile("./essey/"+esseyTitle, (err,data)=>{
      if(err){
        console.log(err);
      }else{
        var htmlcontent = data.toString();
        var markcontent = markdown(htmlcontent);
        callback(markcontent);
      }
  })
}
//获取杂记目录
exports.showOtherEsseyCatalog = (callback)=>{
  var esseyCatalog = [];
  fs.readdir("./otheressey",(err,files)=>{
    if(err){
      console.log(err)
    }else{
      files.forEach(filename=>{
        esseyCatalog.push(filename.split(".")[0]);
      })
      callback(esseyCatalog);
    }
  })
}
//获取杂记内容
exports.showOtherEssey = (title,callback)=> {
  var esseyTitle = title+".md";
  fs.readFile("./otheressey/"+esseyTitle, (err,data)=>{
      if(err){
        console.log(err);
      }else{
        var htmlcontent = data.toString();
        var markcontent = markdown(htmlcontent);
        callback(markcontent);
      }
  })
}
