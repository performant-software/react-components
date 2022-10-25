const _ = require('underscore');
const { parser } = require('./plugin');

module.exports = {
  stories: ['../src/**/*.stories.(js|mdx)'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-docs',
    '@storybook/addon-knobs',
    '@storybook/addon-links'
  ],
  framework: '@storybook/react',
  core: {
    builder: "webpack5"
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
      [
        parser, {
          COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES'
        }
      ]
    ]

    return options;
  }
};
