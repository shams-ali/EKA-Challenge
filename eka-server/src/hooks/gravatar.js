const crypto = require('crypto');
const gravatarUrl = 'https://s.gravatar.com/avatar';
const query = 's=60'; // Size query for 60px

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function gravatar (hook) {
    const { user } = hook.params;
    const { email } = hook.data;
    
    const hash = crypto.createHash('md5').update(email).digest('hex');

    // const firstName = hook.data.firstName
    //   .substring(0, 30)
    //   .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    
    // const lastName = hook.data.lastName
    //   .substring(0, 30)
    //   .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // const street = hook.data.street;

    // const city = hook.data.city
    //   .substring(0, 30)
    //   .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    
    // const state = hook.data.state
    //   .substring(0, 2)
    //   .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    // const phone = hook.data.phone;
      
    // const zip = hook.data.zip;

    hook.data.avatar = `${gravatarUrl}/${hash}?${query}`;

    return Promise.resolve(hook);
  };
};
