
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('myballot').del()
    .then(function () {
      // Inserts seed entries
      return knex('myballot').insert([
        {
          id: 1,
          gov: 1,
          da: 1,
          sos: 1,
          d1: 1,
          d2: 1,
          d3: 1,
          d4: 1,
          d5: 1,
          d6: 1,
          d7: 1
        },
      ]);
    });
};
