exports.up = function (knex) {
  return knex.schema.createTable('activity_logs', function (table) {
    table.increments('id');
    table.integer('task_id');
    table.integer('user_id');
    table.string('type');

    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('activity_logs');
};
