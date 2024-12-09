exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id');
    table.string('name');
    table.string('email');
    table.string('password_hash');
    table.string('role');
    table.string('status').defaultTo('todo');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
