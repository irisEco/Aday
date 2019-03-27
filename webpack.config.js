// webpack.config.js

var path = require('path');
var webpack = require('webpack');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
// var react = require('react');


module.exports = {
  devtool: 'eval-source-map',
  entry: ['./client/entry.js'],  // 指定编译打包入口文件
  output: {   // 编译完了，输出到这个目录，这个文件名
    path: path.join(__dirname, 'out'),
    filename: 'bundle.js'
  },
  //本地服务器配置
  devServer: {
    contentBase: "./",//本地服务器所加载的页面所在的目录
    historyApiFallback: true,//不跳转
    inline: true//实时刷新
  },
  //webpack4+写法
  optimization: {
    minimizer: [
             new UglifyJSPlugin({
                 uglifyOptions: {
                     output: {
                         comments: false
                     },
                     compress: {
                         warnings: false,
                         drop_debugger: true,
                         drop_console: true
                     }
                 }
             }),
         ]
   },
   //webpack 没有loader.
  module: {  // 这个是引入的模块，可以用来做一些其他的事儿
    rules: [
               {
                test:/\.(js|jsx)$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                query:{
                    presets:['es2015','react']
                }
                },
                {
                    test: /\.scss$/,
                    loader: ['style-loader', 'css-loader?url=false', 'sass-loader']
                },
                {
                    test:/\.css$/,
                    loader:['style-loader','css-loader?url=false']
                }
              ]
  
            }
  
};