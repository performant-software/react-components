const { configure } = require('@performant-software/webpack-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const options = {
  module: {
    rules: [{
      test: /\.(c|le)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader',
        'postcss-loader'
      ],
      include: [
        path.resolve(__dirname)
      ]
    }]
  }
};

const mergeOptions = {
  module: {
    rules: {
      test: /\.(c|le)ss$/,
      use: {
        loader: 'match',
        options: 'replace',
      },
    },
  },
};

module.exports = configure(__dirname, options, mergeOptions);
