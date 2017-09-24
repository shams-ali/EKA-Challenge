/* eslint-disable no-console */

// users-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const bookshelf = app.get('bookshelfClient');

  bookshelf.knex.schema.hasTable('users').then(exists => {
    if(!exists) {
      bookshelf.knex.schema.createTable('users', table => {
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

  return bookshelf;
};
