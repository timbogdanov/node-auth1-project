const db = require('../../db/db-config');

module.exports = {
  add,
};

function add(data) {
  return db('users').insert(data);
}
