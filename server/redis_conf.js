var redis = require("redis");
var fs = require("fs")
//创建redis客户端
var client = redis.createClient("6379", "127.0.0.1");
//连接错误处理
client.on("error", function (error) {
    console.log(error)
});
//redis验证(如果redis没有开启验证,此配置可以不写)
//client.auth('123456');

module.exports = client;