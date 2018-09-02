const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");


module.exports = {
  mode: "development",
  entry: {
    app: ['./app/src/index.js', 'webpack-hot-middleware'],
    vendor: [
      'react',
      'react-dom'
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]/bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: [
      '.js', '.jsx'
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, 'app/src', 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
}