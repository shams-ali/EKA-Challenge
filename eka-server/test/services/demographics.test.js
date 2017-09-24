const assert = require('assert');
const app = require('../../src/app');

describe('\'demographics\' service', () => {
  it('registered the service', () => {
    const service = app.service('demographics');

    assert.ok(service, 'Registered the service');
  });
});
