const authUtils = require('../utils/auth')

exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {
          id: 1,
          email: 'a',
          password: authUtils.hashPassword('a'),
          ballotId: 1
        },
      ]);
    }).then(() => {
      return knex.raw("ALTER SEQUENCE user_id_seq RESTART WITH 2;");
    });
};
