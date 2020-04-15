/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-19 15:15:52
 * @LastEditTime: 2019-11-26 15:32:58
 * @LastEditors: Please set LastEditors
 */
'use strict'
module.exports = {
  // 相当于webpack-dev-server，对本地服务器进行配置
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/', // 需要跨域的目标url，我这里用到的是豆瓣API
        changeOrigin: true, // 将基于名称的虚拟托管网站的选项，如果不配置，请求会报404
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}

