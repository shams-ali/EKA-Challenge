const { authenticate } = require('feathers-authentication').hooks;
const { populate } = require('feathers-hooks-common');
const processDemographics = require('../../hooks/process-demographics');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [ processDemographics() ],
    update: [ processDemographics() ],
    patch: [ processDemographics() ],
    remove: []
  },

  after: {
    all: [
      populate({
        schema: {
          include: [{
            service: 'users',
            nameAs: 'user',
            parentField: 'userId',
            childField: '_id'
          }]
        }
      })
    ],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
