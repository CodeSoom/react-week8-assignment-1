const path = require('path');
const Dotenv = require('dotenv-webpack');

module.exports = () => ({
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
  plugins: [
    new Dotenv({
      systemvars: true,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: {
      index: 'index.html',
    },
  },
});
