const config = require('./jest.config.js');

module.exports = {
  ...config,
  coverageReporters: config.coverageReporters.concat(['html']),
};
