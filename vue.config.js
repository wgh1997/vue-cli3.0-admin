const webpack = require('webpack')
const environment = require('./build/environment')
var path = require('path')
module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? './'
        : '/',
    configureWebpack: config => {
        console.log(config,"开发生产共同")
        if (process.env.NODE_ENV === 'production') {
            config.mode = 'production'
            // 为生产环境修改配置...
            console.log(config,"生产环境")
        } else {
            config.mode = 'development'
            // 为开发环境修改配置...
            console.log(config,"开发环境")
        }
    },
    configureWebpack: {
        plugins: [
            new webpack.DefinePlugin({
                'process.env.STAGE': JSON.stringify(environment.stage),
                'process.env.LOCAL_URL': JSON.stringify(environment.localUrl)
            })
        ]
    }
}