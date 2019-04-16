module.exports = {
  configureWebpack: {
    devServer: {
      watchOptions: {
        ignored: [
          '.git',
          'bin',
          'dist',
          'logs',
          'node_modules',
          'routes'
        ]
      }
    }
  }
}
