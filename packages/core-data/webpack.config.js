const { configure } = require('@performant-software/webpack-config');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

const config = {
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

const cjs = configure(__dirname, {
  ...config,
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/cjs'),
    library: {
      type: 'commonjs2'
    }
  },
}, mergeOptions);

const es = configure(__dirname, {
  ...config,
  experiments: {
    outputModule: true
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build/es'),
    library: {
      type: 'module'
    }
  },
}, mergeOptions);

module.exports = [
  cjs,
  es
];
