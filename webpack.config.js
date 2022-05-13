const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )
const TerserPlugin = require("terser-webpack-plugin");

const MODE = process.env.NODE_ENV

module.exports = {
  //watch: true,
  mode: MODE,
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.join( __dirname, 'src/index.pug' ),
      filename: 'index.html',
      minify: MODE == 'production' ? true : false, // HTML MINIFY
      inject: 'body'
    } ),
    new MiniCssExtractPlugin( {
      filename: 'style.css'
    } ),
  ],
  entry: {
    App: [ './src/main.ts', './src/style.less' ],
  },
  output: {
    path: path.resolve( __dirname, './dist' ),
    filename: 'main.js'
  },
  resolve: {
    extensions: [ '.ts' ],
  },
  optimization: {
    minimizer: [ new TerserPlugin( ), new CssMinimizerPlugin( ) ],
    minimize: MODE == 'production' ? true : false // JS & CSS MINIFY
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: { pretty: true },
        //exclude: path.resolve(__dirname, 'node_modules' ),
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
        //exclude: path.resolve( __dirname, 'node_modules' ),
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        //exclude: path.resolve( __dirname,'node_modules' ),
      }
    ]
  }
}