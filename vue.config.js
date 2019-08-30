'use strict'

const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)

module.exports = {
  configureWebpack: {
    entry: './src/render/main.js'
  },
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)

    // 修复Lazy loading routes Error： Cyclic dependency  [https://github.com/vuejs/vue-cli/issues/1669]
    config.plugin('html').tap(args => {
      args[0].chunksSortMode = 'none'
      return args
    })

    // 添加别名
    config.resolve.alias
      .set('@', resolve('src/render'))
      .set('@main', resolve('src/main'))
  },
  css: {
    extract: false,
    loaderOptions: {
      sass: {
        data: '@import "@/styles/variables.scss";'
      }
    }
  },
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        // Chain webpack config for electron renderer process only
        // The following example will set IS_ELECTRON to true in your app
        config.plugin('define').tap(args => {
          args[0]['IS_ELECTRON'] = true
          return args
        })
      },
      mainProcessFile: 'src/main/index.js',
    }
  },

  devServer: {
    proxy: {
      '/api': {
        target: 'http://10.0.2.52:8085'
      }
    }
  }
}