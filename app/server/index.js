require("dotenv").config()
const express = require("express");
const path = require("path")
//webpack dependencies
const webpack = require("webpack");
const webpackDevConfig = require("../../webpack.config");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");
const history = require('connect-history-api-fallback');
const app = express();
app.use(history())
if(process.env.NODE_ENV !== "production"){
  let compiler = webpack(webpackDevConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath,
    historyApiFallback: true,
  })
)
app.use(webpackHotMiddleware(compiler))
}

// app.use(express.static(path.resolve(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(process.env.PORT || 3000, () => console.log("Listenning on port: ", process.env.PORT || 3000))
