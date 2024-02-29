import createNextIntlPlugin from 'next-intl/plugin';
const path = require('path');

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'theme')],
    prependData: `
      @import "./src/theme/_vars.scss";
    `,
  },
};

export default withNextIntl(nextConfig);
