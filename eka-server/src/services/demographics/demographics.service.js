// Initializes the `demographics` service on path `/demographics`
const createService = require('feathers-knex');
const createModel = require('../../models/demographics.model');
const hooks = require('./demographics.hooks');
const filters = require('./demographics.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'demographics',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/demographics', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('demographics');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
