const knex = require('knex');
const Bookshelf = require('bookshelf');

module.exports = function () {
  const app = this;
  const { client, connection } = app.get('postgres');
  const bookShelf = Bookshelf(knex({ client, connection }));

  app.set('bookshelfClient', bookShelf);
};
