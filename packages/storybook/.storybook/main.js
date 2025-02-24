// @flow

import path from 'path';
import _ from 'underscore';

const config = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links'
  ],
  core: {
    builder: {
      name: '@storybook/builder-vite',
      options: {
        viteConfigPath: './vite.config.js',
      },
    }
  },
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  babel: (options) => {
    // Remove the override applied from @storybook/react
    _.each(options.overrides, (o) => {
      _.each(o.plugins, (p) => {
        if (_.isArray(p)) {
          let [name] = p;
          if (name.includes('babel-plugin-react-docgen')) {
            o.plugins = _.reject(o.plugins, (plugin) => plugin === p);
            if (_.isEmpty(o.plugins)) {
              options.overrides = _.reject(options.overrides, (override) => override === o);
            }
          }
        }
      });
    });

    // Add our custom plugin to generate react-docgen
    options.plugins = [
      ...(options.plugins || []),
      path.join(__dirname, 'plugin.js')
    ];

    return options;
  },
  docs: {
    autodocs: true
  }
};

export default config;
