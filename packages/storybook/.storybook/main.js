// @flow

import path, { dirname, join } from 'path';
import _ from 'underscore';

const config = {
  stories: ['../src/**/*.stories.@(js|tsx)'],
  addons: [
    getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    getAbsolutePath("@storybook/addon-links")
  ],

  core: {
    builder: {
      name: getAbsolutePath("@storybook/builder-vite")
    }
  },

  framework: {
    name: getAbsolutePath("@storybook/react-vite"),
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

  docs: {},

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};

export default config;

function getAbsolutePath(value) {
  // eslint-disable-next-line no-undef
  return dirname(require.resolve(join(value, "package.json")));
}
