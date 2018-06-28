exports.up = function (knex, Promise) {
    return knex.schema.createTable('candidates', (table) => {
        table.increments('id')
        table.string('name')
        table.string('office')
        table.string('party')
        table.string('src')
        table.string('img')
        table.text('p1')
        table.text('p2')
        table.text('p3')
        table.boolean('immigration')
        table.boolean('gunControl')
        table.boolean('parisAccords')

    })

};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('candidates')
};
