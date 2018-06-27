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
      knex('user').insert(
        {
          email: body.email,
          password: authUtils.hashPassword(body.password)
        })
        .returning('*')
    )
  }
  // update(id, user){
  //   return database('users').where('id',id).update(user).returning('*')
  // },
  // delete(id){
  //   return database('users').where('id',id).del()
  // }
};
