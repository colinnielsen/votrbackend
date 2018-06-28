
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
        gov: 99,
        ag: 99,
        sos: 99,
        d1: 99,
        d2: 99,
        d3: 99,
        d4: 99,
        d5: 99,
        d6: 99,
        d7: 99
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

  updateBallot(req) {
    return knex('myballot').where('id', req.userId).update(req.body).returning('*')
  },

  delete(id) {
    return knex('user').where('id', id).del()
  }

};
