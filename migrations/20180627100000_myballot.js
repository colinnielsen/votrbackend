exports.up = function (knex, Promise) {
    return knex.schema.createTable('myballot', table => {
        table.increments('id')
        table.integer('gov')
        table.integer('da')
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

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('myballot')
};
