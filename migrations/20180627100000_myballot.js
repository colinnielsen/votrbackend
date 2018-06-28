exports.up = function (knex) {
    return knex.schema.createTable('myballot', table => {
        table.increments('id')
        table.integer('gov')
        table.integer('ag')
        table.integer('sos')
        table.integer('d1')
        table.integer('d2')
        table.integer('d3')
        table.integer('d4')
        table.integer('d5')
        table.integer('d6')
        table.integer('d7')
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('myballot')
};
