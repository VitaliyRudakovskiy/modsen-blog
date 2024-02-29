const { join } = require('path');

const withNextIntl = require('next-intl/plugin')();

module.exports = withNextIntl({
  sassOptions: {
    includePaths: [join(__dirname, 'theme')],
    prependData: `
      @import "./src/theme/_vars.scss";
    `,
  },
});
