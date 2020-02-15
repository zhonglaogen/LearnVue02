const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpackMerage = require('webpack-merge')
const baseConfig = require('./base.config')

moudel.exports =  webpackMerage(baseConfig,{
    plugins: [
        new UglifyJsPlugin()

    ]
})
