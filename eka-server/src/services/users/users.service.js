// Initializes the `users` service on path `/users`
const createService = require('feathers-bookshelf-service');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const filters = require('./users.filters');
const validator = require('validator');
const _ = require('lodash');

module.exports = function () {
  const app = this;
  const bookshelf = app.get('bookshelfClient');
 
  createModel(app);
  
  const Model = bookshelf.Model.extend({
    tableName: 'users',
    rules: {
      email: {
        required: true,
        validator: validator.isEmail
      },
      username: {
        required: true,
        validator: _.isString
      },
      password: {
        required: true,
        validator: _.isString        
      },
      zip: {
        required: false,
        validator: v => validator.isPostalCode(v, 'any')
      },
      city: {
        required: false,
        validator: _.isString
      },
      state: {
        required: false,
        validator: validator.isAlpha
      },
      firstName: {
        required: false,
        validator: validator.isAlpha
      },
      lastName: {
        required: false,
        validator: validator.isAlpha
      },
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
