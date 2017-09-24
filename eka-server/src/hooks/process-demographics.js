// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html

module.exports = function (options = {}) { // eslint-disable-line no-unused-vars
  return function processDemographics (hook) {

    // TODO: Destructure and add better validations
    const user = hook.params.user;

    const firstName = hook.data.firstName
      .substring(0, 30)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    
    const lastName = hook.data.lastName
      .substring(0, 30)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
  
    const street = hook.data.street
      .substring(0, 30)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const city = hook.data.city
      .substring(0, 30)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
    
    const state = hook.data.state
      .substring(0, 2)
      .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

    const phone = hook.data.phone;

    const zip = hook.data.zip;

    // Override the original data
    hook.data = {
      firstName,
      lastName,
      street,
      city,
      state,
      phone,
      zip,
      userId: user._id,
      createdAt: new Date().getTime()
    };
    // Hooks can either return nothing or a promise
    // that resolves with the `hook` object for asynchronous operations
    return Promise.resolve(hook);
  };
};
