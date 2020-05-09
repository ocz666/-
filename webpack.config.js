//webpack配置文件,是js文件，通过node操作，暴露配置对象
const path=require('path')
const webpack=require('webpack')
const htmlWebpackPlugin=require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports={
    mode:'development',
    entry:path.join(__dirname,'./src/main.js'),
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    plugins:[
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),
            filename:'index.html'
        }),
        new VueLoaderPlugin()
    ],
    module:{
        //配置第三方模块 加载器,从右边往左调用
        rules:[
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.scss$/,use:['style-loader','css-loader','sass-loader']},
            {test:/\.(jpg|png|gif|bmp|jpeg)$/,use:'url-loader'},
            {test:/\.m?js$/,use:'babel-loader',exclude:/(node_modules|bower_components)/},
            {test:/\.js\.map$/,use:'file-loader'},
            {test:/\.vue$/,use:'vue-loader'},
            {test:/\.(ttf|eot|svg|woff|woff2)/,use:'file-loader'}
        ]
    },
    resolve:{
        alias:{
            "vue$":"vue/dist/vue.js"
        }
    }
}