var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");
config.entry.app.unshift("webpack-dev-server/client?http://localhost:8081/", "webpack/hot/dev-server");

var compiler = webpack(config);
var server = new webpackDevServer(compiler, {
  contentBase: './',
  hot: true
});

server.listen(8081, 'localhost', () => { this.address
  console.log('server is on: 8081');
});