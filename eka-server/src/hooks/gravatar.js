const crypto = require('crypto');
const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60'; // Size query for 60px

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function gravatar (hook) {
    const { email } = hook.data;
    const hash = crypto.createHash('md5').update(email).digest('hex');
    hook.data.avatar = `${gravatarUrl}/${hash}?${query}`;
    return Promise.resolve(hook);
  };
};
