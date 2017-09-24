const knex = require('knex');
const Bookshelf = require('bookshelf');

module.exports = function () {
  const app = this;
  const { client, connection } = app.get('postgres');
  const bookshelf = Bookshelf(knex({ client, connection }));
  bookshelf.plugin(require('bookshelf-validation'));
  app.set('bookshelfClient', bookshelf);
};
