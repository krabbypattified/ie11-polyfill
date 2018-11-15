module.exports = (_, argv) => {

  const dev = argv.mode === 'development'

  return {
    // Dev options
    devtool: dev ? 'cheap-inline-source-map' : false,
    watchOptions: { ignored: '/node_modules/' },
    devServer: {
      contentBase: './dist',
      port: 9000,
      // Bugfix: Allow testing in Parallels. Maybe not needed with POW
      host: '0.0.0.0',
      disableHostCheck: true,
    },
  
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'IE 11' }]],
            }
          }
        }
      ]
    },

  }
};
