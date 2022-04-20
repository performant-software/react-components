module.exports = {
  stories: ['../src/**/*.stories.js'],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links'
  ],
  framework: '@storybook/react',
  core: {
    builder: "webpack5"
  }
};
