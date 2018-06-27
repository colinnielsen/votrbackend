exports.up = function (knex, Promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments('id')
        table.string('email')
        table.string('password')
        table.integer('ballotId').references('myballot.id').onDelete('cascade')

    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('user')
};
