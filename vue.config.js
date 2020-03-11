// vue.config.js
const path = require('path')

function resolve(dir) {
  // return path.join(__dirname, '..', dir)
  return path.join(__dirname, dir)
}
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue$': 'vue/dist/vue.esm.js',
        '@': resolve('src'),
      }
    },
  },
  devServer: {
    proxy: {
      '/api': {
        // 目标地址
        target: 'https://m.you.163.com',
        // 是否跨域
        changeOrigin: true,
        // 重写路径的操作---重写api
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  }
}