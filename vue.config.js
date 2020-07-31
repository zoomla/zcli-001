const webpack = require("webpack");
module.exports = {
  configureWebpack: {
    //支持jquery
    plugins: [
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            "windows.jQuery":"jquery"
        })
    ]
},css: {
    sourceMap: true
  }
}