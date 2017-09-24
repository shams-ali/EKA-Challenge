/* eslint-disable no-console */

// demographics-model.js - A KnexJS
// 
// See http://knexjs.org/
// for more of what you can do here.
module.exports = function (app) {
  const db = app.get('knexClient');

  db.schema.hasTable('demographics').then(exists => {
    if(!exists) {
      db.schema.createTable('demographics', table => {
        table.increments('id');
        table.string('firstName');
        table.string('lastName');
        table.integer('phone');
        table.string('street');
        table.string('city');
        table.string('state');
        table.integer('zip');
        table.string('text');
      }).then(
        () => console.log('Updated demographics table'),
        e => console.error('Error updating demographics table', e)
      );
    }
  });
  

  return db;
};
