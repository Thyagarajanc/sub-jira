const knex = require('../database/connection.js');

async function all() {
  return knex('comments');
}

async function get(id) {
  const results = await knex('comments').where({ id });
  return results[0];
}

async function create(user) {
  const results = await knex('comments').insert(user).returning('*');
  return results[0];
}

async function update(id, properties) {
  const results = await knex('comments').where({ id }).update(properties).returning('*');
  return results[0];
}

async function del(id) {
  const results = await knex('comments').where({ id }).del().returning('*');
  return results[0];
}

async function clear() {
  return knex('comments').del().returning('*');
}

module.exports = {
  all,
  get,
  create,
  update,
  delete: del,
  clear,
};
