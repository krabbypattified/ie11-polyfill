const webpack = require('webpack');

const resolve = path => require('path').resolve(__dirname, path);

module.exports = (_, argv) => {

  const dev = argv.mode === 'development'

  return {
    devtool: dev ? 'cheap-inline-source-map' : false,
    watchOptions: { ignored: '/node_modules/' },
  
    // Serve at http://localhost:9000/main.js
    devServer: {
      contentBase: './dist',
      port: 9000,
      // Bugfix: Allow testing in Parallels
      host: '0.0.0.0',
      disableHostCheck: true,
    },
  
    // Expose environment variables
    plugins: [new webpack.EnvironmentPlugin(['npm_package_version'])],
  
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
