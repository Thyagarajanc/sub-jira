const knex = require('../database/connection.js');

async function all() {
  return knex('users');
}

async function get(id) {
  const results = await knex('users').where({ id });
  return results[0];
}

async function create(user) {
  const results = await knex('users').insert(user).returning('*');
  return results[0];
}

async function update(id, properties) {
  const results = await knex('users').where({ id }).update(properties).returning('*');
  return results[0];
}

async function del(id) {
  const results = await knex('users').where({ id }).del().returning('*');
  return results[0];
}

async function clear() {
  return knex('users').del().returning('*');
}

const findByEmail = async (email) => {
  const result = await knex('users').where({ email }).first();
  return result;
};

module.exports = {
  all,
  get,
  create,
  update,
  delete: del,
  clear,
  findByEmail,
};
