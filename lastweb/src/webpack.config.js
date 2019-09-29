const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Webpack uses this to work with directories
const path = require('path');
const webpack =require('webpack');
// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

  // Path to your entry point. From this file Webpack will begin his work
  entry:['./src/index.js',
      //   './jquery', will load jquery from node_modules
         
        ],
       optimization: {
        minimize: false
      },

  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
    module: {
  rules: [
       {
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    },
      {
           test: /\.css$/,
           loader: 'style-loader!css-loader'
      }
  ]},
    plugins: [

  new MiniCssExtractPlugin({
    filename: "bundle.css"
 
  }),
      new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      'window.jQuery': 'jquery'
    })
 
        

],
   
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'development'
};