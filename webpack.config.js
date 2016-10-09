var path = require('path');
var webpack = require('webpack')

module.exports = {
  entry: {
    app: ['./src/index.js']
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name]-bundle.js',
    publicPath: '/assets/'
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  debug: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        loader: 'babel-loader',
      }
    ]
  }
};