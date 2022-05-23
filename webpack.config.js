// Note this only includes basic configuration for development mode.
// For a more comprehensive configuration check:
// https://github.com/fable-compiler/webpack-config-template

var path = require("path");

module.exports = {
  mode: "development",
  entry: resolve("./src/Fable.Highcharts.Sample/output/App.js"),
  output: {
    path: path.join(__dirname, "./public"),
    filename: "bundle.js",
  },
  mode: 'development',
  devtool: 'eval-source-map',
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    port: 8080,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        use: ['source-map-loader'],
      }
    ]
  }
}


function resolve(filePath) {
  return path.isAbsolute(filePath) ? filePath : path.join(__dirname, filePath);
}