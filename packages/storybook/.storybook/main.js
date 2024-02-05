// @flow

import path from 'path';
import _ from 'underscore';

const config = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links'
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {}
  },
  async webpackFinal(config) {
    /**
     * This is a work-around for an issue with the @peripleo/maplibre and @peripleo/peripleo packages. Neither exports
     * a CommonJS package, which is what this library uses. So any of the following statements will fail:
     *
     * const L = require('@peripleo/*')
     *
     * We could either:
     * A. Update this library to export EMS
     * B. See if the Peripleo libraries can export CommonJS
     */
    const resolve = {
      ...config.resolve,
      conditionNames: ['import', 'browser', 'default']
    }

    return _.extend(config, { resolve });
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
