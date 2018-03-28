const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'dev/src/chat_test.js'),
  output: {
    path: path.resolve(__dirname, 'dev'),
    filename: 'index.js'
  },
  devServer: {
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // Open the page in browser
    contentBase: path.resolve(__dirname, 'dev')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' },
        {
          loader: 'sass-loader',
          options: {
            includePaths: [
              path.resolve(__dirname, 'src/sass/')
            ]
          }
        }
      ]
    }, {
      test: /\.(jpg|png|gif|svg)$/,
      use: {
        loader: 'url-loader'
      }
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React Chat Widget Test',
    filename: 'index.html',
    inject: false,
    template: require('html-webpack-template'),
    bodyHtmlSnippet: '<div id="app"/>'
  })]
};
