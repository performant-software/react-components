const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const dotenv = require('dotenv');
const { merge, mergeWithRules } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

dotenv.config();

const mode = process.env.NODE_ENV;
let devtool = 'source-map';

if (mode === 'development') {
  devtool = 'inline-source-map';
}

module.exports = {
  configure: (directory, options = {}, mergeOptions = null) => () => {
    const baseConfig = {
      mode,
      devtool,
      entry: './src/index.js',
      externals: [
        'react',
        'react-dom',
        nodeExternals({
          additionalModuleDirs: [
            path.resolve(directory, '../../node_modules')
          ]
        })
      ],
      plugins: [
        new MiniCssExtractPlugin()
      ],
      output: {
        filename: 'index.js',
        path: path.resolve(directory, 'build'),
        libraryTarget: 'commonjs2'
      },
      module: {
        rules: [{
          test: /\.(js|jsx)$/,
          include: path.resolve(directory, './src'),
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env', {
                    modules: false
                  }
                ],
                '@babel/preset-flow',
                '@babel/preset-react'
              ],
              plugins: [
                [
                  '@babel/plugin-proposal-class-properties', {
                    loose: true
                  }
                ], [
                  '@babel/plugin-proposal-private-methods', {
                    loose: true
                  }
                ], [
                  '@babel/plugin-proposal-private-property-in-object', {
                    loose: true
                  }
                ]
              ],
              ignore: [
                'node_modules/**'
              ]
            }
          }
        }, {
          test: /\.(c|le)ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'less-loader',
              options: {
                lessOptions: {
                  math: 'always'
                }
              }
            }
          ],
          include: [
            path.resolve(directory)
          ]
        }, {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
          include: path.resolve(directory)
        }, {
          test: /\.xml$/,
          use: 'raw-loader'
        }, {
          test: /\.m?js/,
          resolve: {
            fullySpecified: false
          }
        }, {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)|\.png($|\?)/,
          use: 'file-loader'
        }]
      }
    };

    // Merge our base config, environment overrides
    let config;

    if (mergeOptions && options?.module?.rules) {
      config = mergeWithRules(mergeOptions)(baseConfig, options);
    } else {
      config = merge(baseConfig, options);
    }

    const extraConfig = {
      plugins: [
        // Clean the output path before builds.
        new CleanWebpackPlugin(),
      ]
    };

    return merge(config, extraConfig);
  }
};
