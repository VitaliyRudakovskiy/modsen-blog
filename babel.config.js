const plugins = [];

if (process.env.NODE_ENV === 'production') {
  plugins.push(['react-remove-properties', { properties: ['data-cy'] }]);
}

module.exports = { plugins };
