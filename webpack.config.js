const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/index.jsx'),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  resolve: {
    alias: {
      presentational: path.resolve(__dirname, 'src/presentational/'),
      container: path.resolve(__dirname, 'src/container/'),
      _redux: path.resolve(__dirname, 'src/redux/'),
      utils: path.resolve(__dirname, 'src/utils.js'),
      services: path.resolve(__dirname, 'src/services/'),
    },
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
