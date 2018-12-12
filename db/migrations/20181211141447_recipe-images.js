
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', table => {
      table.string('recipe_images');
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('recipes', table => {
      table.dropColumn('recipe_images');
    })
  ]);
};
