const express = require('express');
const app = express();
// const db = require('./model/db');
const router = express.Router();
const fs = require('fs');
const markdown = require('marked');
const hljs = require('highlight.js'); 
app.get("/essey",(req,res)=>{
    var essey = [];
    fs.readdir(__dirname+"/essey",function(err,files){
        files.forEach(filename => {
            essey.push(filename.split(".")[0]);
        });
        res.send(essey);
    })
})
app.get('/essey/:title',(req,res)=>{
    var title = req.params.title+'.md';
    fs.readFile(__dirname+"/essey/"+title,(err,data)=>{
        if(err){
            console.log(err);
        }
        var markdownContent = data.toString();
        var htmlContent = markdown(markdownContent);
        res.send(htmlContent);
    })
})
app.listen(8000);
