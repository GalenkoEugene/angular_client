const path = require('path');

module.exports = {
  entry: './app/app.module.js',

  output: {
      path: path.join(__dirname, 'bin'),
      filename: 'app.bundle.js',
  },

  module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
      },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/, loader: "style!css" }
    ]
  },

  devtool: "#inline-source-map",

  devServer: {
    proxy: {
      "/api/*": {
        target: "http://localhost:3000",
        secure: false
      }
    }
  }
}
