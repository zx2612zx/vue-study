const path=require('path');
//使用插件需要先使用npm安装
var htmlWebpackPlugin=require("html-webpack-plugin");
module.exports={
  entry:{
    "app":"./src/js/app.js",
    "main":"./src/js/main.js"
  },
  output:{
    path: path.resolve(__dirname, './dist'),
    filename:"js/[name]-[hash].js"
  },

  module:{
    /**
    在遇到import 或者require并且是css文件，
    则使用css-loader和style-loader将文件转换为webpack能够识别的文件格式
    */
    rules:[
      {
        test:/\.css$/,
        use:["css-loader",'style-loader']
      }
    ]
  },

  plugins:[
    new htmlWebpackPlugin({
      template:"main.html",
      filename:"main.html"
    })
  ]

}
