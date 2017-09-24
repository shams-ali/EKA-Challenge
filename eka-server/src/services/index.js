const demographics = require('./demographics/demographics.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(demographics);
};
