exports.up = function (knex) {
  return knex.schema.createTable('projects', function (table) {
    table.increments('id');
    table.string('name');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('projects');
};
