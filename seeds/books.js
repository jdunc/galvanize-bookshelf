const data = require('../config/books.js');

exports.seed = function seed(knex, Promise) {
    // Deletes ALL existing entries
    return knex('books')
        .del()
        .then(() => Promise.all([
            // Inserts seed entries
            knex('books')
            .insert(data.books),
            knex.raw('SELECT setval(\'books_id_seq\', (SELECT MAX(id) FROM books))'),
        ]));
};
