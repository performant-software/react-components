const dotenv = require('dotenv');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

dotenv.config();

const mode = process.env.NODE_ENV;
let devtool = 'source-map';

if (mode === 'development') {
  devtool = 'inline-source-map';
}

module.exports = {
  mode,
  devtool,
  entry: './src/index.js',
  externals: [nodeExternals({
    allowlist: ['simple-keyboard', 'react-date-picker']
  })],
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    library: '',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      use: ['babel-loader']
    }, {
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, './src')
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, './src')
    }, {
      test: /\.xml$/,
      use: 'raw-loader'
    }]
  }
};
