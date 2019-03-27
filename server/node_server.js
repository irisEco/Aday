var http = require('http')
var client = require('./redis_conf')
var fs = require("fs")
var file = require('./handel_file')
var mime = require('mime')
let title = null
let url = null
let content_url = null
let book_describe = null
let book_img = null
let file_path = "server/1.jpg"
let current_content = null
let story = null
let article = null
let cb = (err, data) => {
    //   console.log('err: ', err, ' data: ', data, ' data type: ', typeof data);
    if (err) {
        console.log(err);
    } else{
          story = data
}
}

function base64_decode(base64str, file) {
    var bitmap = Buffer.from(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
}
var getData=(data)=>{
    article = JSON.parse(data)
    title = article.title
    content_url = article.content_url
    book_describe = content_url[0]['book-describe']
    book_img = content_url[0]['book-img']
    base64_decode(book_img, file_path)
    current_content = {
        'title':title,
        'content_url':content_url,
        'book_describe':book_describe
    }
    return current_content;
}
let get_img = (url, req, res) => {
    res.setHeader("Content-Type", "image/jpeg");
    //格式必须为 binary 否则会出错
    var content = fs.readFileSync(url, "binary");
    res.writeHead(200, "Ok");
    res.write(content, "binary"); //格式必须为 binary，否则会出错
}

// let base64_decode = (base64str, file)=>{
//     var bitmap = Buffer.from(base64str, 'base64');
//     fs.writeFileSync(file, bitmap);
// }

client.select("0", function (error) {
    if (error) {
        console.log(error);
    } else {
        console.log('select is ok!')
        client.lrange('reptile:current_contents', 0, 0, cb)//list 类型-1是返回所有值
        //  client.end(true);
    }

})

var server = http.createServer(function (request, response) {
    //设置请求的返回头type,content的type类型列表见上面
    // url_path = "server/1.jpg"
    url = request.url;
    console.log("url: ",url)
if(url==='/home'||url==='/'){
    
    // response.writeHead(200,{'Content-Type': 'application/json,;charset=UTF-8'})
    // let getJson =  getData(story)
    // let msg = JSON.stringify(getJson,'utf-8')
    //console.log(mime.getType(msg))
    // response.write(msg)
    // response.end(msg)
    const html = fs.readFileSync('login.html','utf-8')
    response.writeHeader(200,{'Access-Control-Allow-Origin':'*'})
    response.end(html)
}
})
server.listen(8080)

console.log('Server is running at http://127.0.0.8080');