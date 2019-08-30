module.exports = {
  configureWebpack: {
    entry: './src/render/main.js'
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
  }
}