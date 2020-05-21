
exports.up = function(knex) {
  return knex.schema
  .createTable('teams', teams => {
      teams.increments();
      teams.string('name', 512).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('teams')
};
