const { join, resolve } = require('path');

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  sassOptions: {
    includePaths: [join(__dirname, 'theme')],
    prependData: `
      @import "./src/theme/_mixins.scss";
      @import "./src/theme/_vars.scss";
    `,
  },
  webpack: (config) => {
    config.resolve.alias['@images'] = resolve(__dirname, './src/assets/images');
    return config;
  },
});
