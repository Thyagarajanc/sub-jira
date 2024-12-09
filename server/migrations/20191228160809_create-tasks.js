exports.up = function (knex) {
  return knex.schema.createTable('tasks', function (table) {
    table.increments('id');
    table.string('title');
    table.string('content');
    table.integer('assignee');
    table.string('status');
    table.integer('comment_count');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('tasks');
};
