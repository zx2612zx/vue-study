
const path=require('path');
//我们在启动脚本的时候的环境变量全部都是存在  process中的
const isDev=process.env.NODE_ENV === 'development';

const HtmlWebpackPlugin=require('html-webpack-plugin')

const webpack=require('webpack');

const config={

    /**
     * 处理入口
     */
    entry:{
        "index":path.join(__dirname,"src/index.js")
    },
    output:{
        path:path.join(__dirname,'dist'),
        filename:"[name].js"
    },
    module:{
        rules:[
            {
                test:/\.stylus$/,
                use:[
                    'style-loader',
                    'css-loader',
                    {
                        loader:'postcss-loader',
                        options:{
                            sourceMap:true
                        }
                    },
                    'stylus-loader'
                ]
            },
            {
                test:/\.jsx$/,
                use:'babel-loader'
            },
            {
                test:/\.vue$/,
                loader: 'vue-loader'
            },
            {
                test:/\.(gif|jpg|png|bmp|svg|jpeg)$/,
                use:[
                    {
                        loader:"url-loader",
                        options:{
                            limit:1024
                        }
                    }
                ]
            }
        ]
    },
    plugins:[
        //webpack在编译或者在js中可以判断当前的环境是什么
        new webpack.DefinePlugin({
            "process.env":{
                NODE_ENV:isDev?'"development"':'"production"'
            }
        }),
        new HtmlWebpackPlugin()
    ]
};

/**
 * 配置根据环境
 */
if(isDev){
    //帮助我们在页面上调试源代码source_map
    config.devtool='cheap-module-eval-source-map';

    
    config.devServer={
        port:8081,
        host:'127.0.0.1',
        overlay:{
            errors:true
        },
        inline:true,
        //只渲染部分页面，都不是每次改动代码，都重新渲染整个页面
        hot:true
      };
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );
    
}

module.exports = config;