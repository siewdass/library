const path = require( 'path' )
const HtmlWebpackPlugin = require( 'html-webpack-plugin' )
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' )
const CssMinimizerPlugin = require( 'css-minimizer-webpack-plugin' )
const TerserPlugin = require("terser-webpack-plugin");

const PROD = false

module.exports = {
  mode: PROD == true ? 'production' : 'development',
  plugins: [
    new HtmlWebpackPlugin( {
      template: path.join( __dirname, 'src/index.pug' ),
      filename: 'index.html',
      minify: PROD,
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
    minimizer: [ new TerserPlugin(), new CssMinimizerPlugin( ) ],
    minimize: PROD
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: path.resolve(__dirname, 'node_modules' ),
        options: { pretty: true },
      },
      {
        test: /\.less$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader', 'less-loader' ],
        exclude: path.resolve( __dirname, 'node_modules' ),
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: path.resolve( __dirname,'node_modules' ),
      }
    ]
  }
}
