const webpackMerage = require('webpack-merge')
const baseConfig = require('./base.config')

module.exports = webpackMerage(baseConfig,{
    devServer: {
        //配置本地服务器，监听文件夹改变,port端口，默认8080，inline页面实时刷新,historyApiFallback:在SPA页面，依赖html5的history模式
        //weboack-dev-serve 跑本地服务
        contentBase: './dist',
        inline: true
    }
})

