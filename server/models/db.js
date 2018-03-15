//封装所有数据库基本操作
//封装成函数
var MongoClient = require('mongodb').MongoClient;

function _connectDB(){
    var url = 'mongodb://localhost:27017';
    MongoClient.connect(url,function(err,client){
        if(err){
            console.log("连接失败");
        }
        console.log("连接成功")
    })
}

//采用回掉函数的方式
function _connectDB(callback){
    var url = 'mongodb://localhost:27017';
    MongoClient.connect(url,function(err,client){
        callback(err,client);
    })
}
//插入数据
//dbName表示数据库名字
//collectionName表示集合名字
//json表示需要插入的数据
//callback表示插入成功之后的动作
exports.insertOne = function(dbName,collectionName,json,callback){
    _connectDB(function(err,client){
        const col = client.db(dbName).collection(collectionName);
        col.insertOne(json,function(err,result){
            callback(err,result);
            client.close();
        });

    })
}

//查找数据
//json代表查询条件。
exports.find = function(dbName,collectionName,json,callback){
    _connectDB(function(err,client){
        const col = client.db(dbName).collection(collectionName);
        col.find(json).toArray(callback)
        client.close();
    })
}
//删除数据
exports.delete = function(dbName,collectionName,json,callback){
    _connectDB(function(err,client){
        const  col = client.db(dbName).collection(collectionName);
        col.deleteMany(json,callback)
        client.close();
    })
}

exports.update = function(dbName,collectionName,args,callback){
    _connectDB(function(err,client){
        const  col = client.db(dbName).collection(collectionName);
        col.updateMany(args[0],args[1],callback)
        client.close();
    })
}

//
