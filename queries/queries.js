// const database = require("../connection.js");
var knex = require('../connection')
const authUtils = require('../utils/auth')
module.exports = {
  getUserById: function (id) {
    return knex('user').select().where('id', id)
  },
  getUserByEmail: function (email) {
    return knex('user').select().where('email', email).first()
  },
  getCandidateFavorites: function (id) {
    return knex('myballot')
      .where('id', id).returning([0])
  },

  create(body) {
    return (
      knex('myballot').insert({
        gov: null,
        da: null,
        sos: null,
        d1: null,
        d2: null,
        d3: null,
        d4: null,
        d5: null,
        d6: null,
        d7: null
      })
      .returning('id')
      .then(id =>
        {
          knex('user').insert(
            {
              email: body.email,
              password: authUtils.hashPassword(body.password),
              ballotId: id
            }).returning('*')
        })
    )
  },
  update(id, myballot){
    return knex('myballot').where('id',id).update(myballot).returning('*')
  },
  delete(id){
    return knex('users').where('id',id).del()
  }
};
