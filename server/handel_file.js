var file = require('./file');
var fs = require('fs')
  module.exports={
      login:function(req,res){
          var callback=function(data){
              res.write(data);
              res.end();
          }
          file.readfile('./views/login.html',callback);//使用异步读取
     },
     register:function(req,res){
         var data=file.readfileSync('./views/login.html');//使用同步读取
         res.write(data);
         res.end();
     },
     readImg:function(path,res){
        fs.readFile(path,'binary',function(err,  file)  {
            if  (err)  {
                console.log(err);
                return;
            }else{
                console.log("输出文件");
                    res.writeHead(200,  {'Content-Type':'image/jpeg'});
                    res.write(file,'binary');
                    res.end();
            }
        });
    },
    showImg:function(req,res){
        file.readImg('server/1.jpg',res);
}

 } 