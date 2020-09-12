const path = require('path');

module.exports = {
  stories: [
    /* sorting stories */
    '../src/components/**/*.stories.(tsx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs',
    '@storybook/addon-a11y',
    'storybook-addon-react-docgen',
    /* related to issue: https://github.com/storybookjs/storybook/issues/7829 */
    {
      name: '@storybook/addon-docs',
      options: {
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });
    config.resolve.extensions.push('.ts', '.tsx', '.json');
    config.resolve.alias = {
      '@components': path.resolve(__dirname, '../src/components/'),
      '@services': path.resolve(__dirname, '../src/services/'),
      '@customTypes': path.resolve(__dirname, '../src/customTypes/'),
    };

    return config;
  },
};
