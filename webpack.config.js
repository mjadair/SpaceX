const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/app.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(''),
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.(ts|tsx)$/, loader: 'ts-loader', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'] },
      { test: /\.s(a|c)ss$/, loader: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.(png|jpe?g|gif)$/i, use: [{
        loader: 'file-loader'
      }] }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer: {
    contentBase: path.resolve('src'),
    hot: true,
    open: true,
    port: 8000,
    watchContentBase: true,
    historyApiFallback: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
  ]
}