const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry:'./src/client/index.js',
    mode: 'development',
   devtool:'source-map',

   output:{
       libraryTarget: 'var',
       library:'Client'
   },
   devServer: {
    host: "localhost",
    port: "3000",
    proxy: [
      {
        context: ["/api"],
        target: "http://localhost:3000"
      }
    ],
    hot: true,
    overlay: true,
    headers: {
      "Access-Control-Allow-Origin": "*"
    },
    historyApiFallback: true
  },

   module: {
    rules: [
        {
            test: '/\.js$/',
            exclude: /node_modules/,
            loader: "babel-loader"
        },
        {
            test: /\.scss$/,
            use: [ 'style-loader', 'css-loader', 'sass-loader' ]
    } 
    ]
},
plugins: [
    new HtmlWebPackPlugin({
        template: "./src/client/views/index.html",
        filename: "./index.html",
    }),
    new CleanWebpackPlugin({
        // Simulate the removal of files
        dry: true,
        // Write Logs to Console
        verbose: true,
        // Automatically remove all unused webpack assets on rebuild
        cleanStaleWebpackAssets: true,
        protectWebpackAssets: false
}),

    
  
]
}

