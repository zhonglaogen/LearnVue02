const path = require('path');
//用node的东西，缺少node的包，就要用npm init,生成了package。json,
//如果json文件依赖某些东西，要用npm install
//path.resolve()拼接路径
//执行webpack就可以了 （webpack ./src/main.js ./dist/bundle.js）
//npm run serve 跑程序，
//npm run build 打包，还要再把webpack和npm run build 映射
//在json文件找到script，写build的key和v，执行npm run build 就执行脚本了
//优点，免去复杂的命令，
// 优先选择本地的webpack版本，防止版本冲突
//npm install webpack@3.6.0 --save-dev局部安装 全局安装（npm install webpack@3.6.0 -g）
//json 文件多个"devDependencies": {
//     "webpack": "^3.6.0"
//   }
//表示开发依赖
//生成node_modules包
//配置文件以及相关模块需要在webpack官网查找
//vue 开发和运行都需要的依赖，所以 npm install vue --save
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        //只要是url都会拼接这个
        publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css loader 只负责加载，不能解析，也不能生效
                //npm install style-loader --save-dev 使样式生效,负责将样式添加到dom，注意顺序，读取loader时从右向左读取
                use: ['style-loader', 'css-loader' ]
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]

            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            //当加载的图片小于这个大小，会将图片编译成base64字符串
                            //当大于图片大小，会使用file-loader 加载
                            limit: 8192,
                            //[name]原来的名字
                            name: 'img/[name].[hash:8].[ext]'
                        }

                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // presets: ['@babel/preset-env']
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    //让complier代替runtiem
    resolve: {
        //省略引入模块时的后缀
        extensions: ['.js','.css','.vue'],
        //alias 别名
        alias: {
            'vue$': 'vue/dist/vue.esm.js'

        }
    }

}