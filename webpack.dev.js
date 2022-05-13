const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )
const TerserPlugin = require( 'terser-webpack-plugin' )
const CopyPlugin = require( 'copy-webpack-plugin' )
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin');
const BeautifyHtmlWebpackPlugin = require('beautify-html-webpack-plugin');

const MODE = process.env.NODE_ENV

module.exports = {
  watch: false,
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.join( __dirname, './src/index.pug' ),
      filename: 'index.html',
      //minify: MODE == 'production' ? true : false, // HTML MINIFY
      minify: {
        removeComments: true,
        //removeEmptyElements: false,
        //collapseWhitespace: true // minify HTML
      },
      inject: 'body',
      meta: {
        format: { 
          charset: 'UTF-8',
        },
        responsive: { 
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      },
    } ),
    new MiniCssExtractPlugin( {
      filename: 'style.css'
    } ),
    new CopyPlugin( {
      patterns: [ { from: "src/assets", to: "assets" } ]
    } ),
    new HtmlWebpackTagsPlugin( {
      links: [ { path: 'assets/favicon.ico', attributes: { rel: 'icon' } } ]
    } ),
    new BeautifyHtmlWebpackPlugin( { 'preserve_newlines': false, "indent_empty_lines": false } ),
  ],
  entry: {
    App: [ './src/main.ts', './src/style.less' ],
  },
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'main.js'
  },
  resolve: {
    extensions: [ '.ts' ], // IMPORTS
  },
  optimization: {
    minimizer: [ new TerserPlugin( ), new CssMinimizerPlugin( ) ],
    minimize: false // JS & CSS MINIFY
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: { pretty: true },
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
      }
    ]
  }
}