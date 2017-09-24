/* eslint-disable no-console */

// users-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');

  db.schema.hasTable('users').then(exists => {
    if(!exists) {
      db.schema.createTable('users', table => {
        table.increments('id');
        table.string('email').unique();
        table.string('username').unique();
        table.string('password');
        table.string('firstName');
        table.string('lastName');
        table.string('street');
        table.string('city');
        table.string('state');
        table.string('phone');        
        table.integer('zip');
      })
        .then(
          () => console.log('Updated users table'),
          e => console.error('Error updating users table', e)
        );
    }
  });

  return db;
};
