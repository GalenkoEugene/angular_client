const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: "./app/app.module.js",

  output: {
      path: path.join(__dirname, "bin"),
      filename: "app.bundle.js",
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      { 
        test: /\.html$/, 
        loader: "html-loader" 
      },
      { 
        test: /\.css$/, 
        loader: "style-loader!css-loader" 
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: "url-loader?limit=100000" 
      }
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
  },

  plugins: [
    new webpack.ProvidePlugin({
     $: "jquery",
     jQuery: "jquery"
    })
  ]
}
