// const database = require("../connection.js");
var knex = require('../connection')
const authUtils = require('../utils/auth')

module.exports = {
  getUserById: function (id) {
    return knex('user').where('id', id).returning('*')
  },
  getUserByEmail: function (email) {
    return knex('user').select().where('email', email).first()
  },
  getCandidateFavorites: function (id) {
    return knex('myballot')
      .where('id', id).returning([0])
  },
  getAllCandidates: function () {
    return knex('candidates').returning('*')
  },

  create(body) {
    return (
      knex('myballot').insert({
        gov: null,
        ag: null,
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
        .then(id => {
          return knex('user').insert(
            {
              email: body.email,
              password: authUtils.hashPassword(body.password),
              ballotId: parseInt(id)
            }).returning('*')
        })
    )
  },

  updateBallot(id, myballot) {
    return knex('myballot').where('id', id).update(myballot).returning('*')
  },

  delete(id) {
    return knex('user').where('id', id).del()
  }

};
