/*
 * @Description: In User Settings Edit
 * @Author: 王小玟
 * @Date: 2020-03-18 15:15:52
 * @LastEditTime: 2019-11-26 14:55:00
 * @LastEditors: Please set LastEditors
 */
'use strict'
// const path = require('path')
// //const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 引入插件
// function resolve(dir) {
//   return path.join(__dirname, dir)
// }

// const name = 'MusicOfGRM' // page title
// const port = 3000 // dev port

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: { 
    port: "4000",
    host: "localhost",
    open: true,
    proxy: {
        "/api": {
            target: "http://localhost:4000",
            changeOrigin: true, 
            ws: true,
            pathRewrite: {
                "^/api": "" 
            }
        }
    }
}
}
