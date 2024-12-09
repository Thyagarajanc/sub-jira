exports.up = function (knex) {
  return knex.schema.createTable('comments', function (table) {
    table.increments('id');
    table.string('content');
    table.integer('tast_id');
    table.integer('commentor');
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('comments');
};
