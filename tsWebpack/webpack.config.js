//引入一个包
const path = require('path');
//引入html插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入clean插件 打包时会先清空 dist文件夹，再重新添加
const CleanWebpackPlugin = require('clean-webpack-plugin');
//webpack中所有的配置信息都一个写在 module.export中
module.exports ={

    //指定入口文件
    entry:"./src/index.ts",
    mode:"production",/*  */
    //指定打包文件所在目录
    output:{
        //指定打包文件的目录
        //__dirname表示当前路径的绝对路径
        path:path.resolve(__dirname,'dist'),
        //打包文件的文件
        filename:'bundle.js',
        //为了兼容ie老版本 关闭箭头函数
        environment:{
            arrowFunction:false
        }
    },



    //指定webpack打包要使用的模块
    module:{
        //指定要加载的规则
        rules:[
            {
                //test 指定的是规则生效的文件
                test:/\.ts$/,
                //要使用的lader
use:[
    //指定加载器 babel这种复杂配置可以这样使用
    {
        loader:"babel-loader",
        //配置babel
        options:{
            //设置预定义的环境
            presets:[
                [
                //指定环境的插件
                '@babel/preset-env',
                    //配置信息
                    {
                        //要兼容的目标浏览器
                    targets:{
                        "chrome":"58",
                        "ie":"11"

                    },
                    //指定corejs的版本
                    "corejs":"3",
                    //使用 corejs的方式 "usage" 表示按需加载
                    "useBuiltIns":"usage"


                }

                ]
                
            ]
            
            
        }
    },
    'ts-loader'

],
                //要排除的文件
                exclude:/node-modules/
            }
        ]
    },

    //配置webpack插件
    plugins:[
        new HTMLWebpackPlugin({
            //title:"这是一个自定义title"
            /* 打包此路径的html */
            template:"./src/index.html"
        }),

        
    ],

    //设置那些文件可以作为模块使用
    resolve:{
        extensions:['.ts','.js']
    }
}