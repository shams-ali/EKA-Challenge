// Initializes the `users` service on path `/users`
const createService = require('feathers-bookshelf-service');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const filters = require('./users.filters');

module.exports = function () {
  const app = this;
  const bookshelf = app.get('bookshelfClient');

  createModel(app);
  
  const Model = bookshelf.Model.extend({
    tableName: 'users',
    initialize: function() {
      this.on('saving', this.validate, this);
    },
    validations: {
      email: ['required', 'validEmail'],
      username: ['required', 'alphaNumeric'],
    },
  });


  const paginate = app.get('paginate');

  const options = {
    name: 'users',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/users', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
