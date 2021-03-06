//-------------models/file.js-------------------------
var fs = require('fs');
module.exports = {
    readfile: function (path, callback) {          //异步读文件，需要传入回调函数
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
            } else {
                callback(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync: function (path) {      //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log("同步方法执行完毕");
        return data;
    }
}