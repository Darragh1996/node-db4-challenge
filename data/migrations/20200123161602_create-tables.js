exports.up = function(knex) {
  return knex.schema
    .createTable("recipes", tbl => {
      tbl.increments();
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
    })
    .createTable("ingredients", tbl => {
      tbl.increments();
      tbl
        .text("name", 128)
        .unique()
        .notNullable();
    })
    .createTable("steps", tbl => {
      tbl.increments();
      tbl.text("instruction", 128).notNullable();
      tbl.decimal("quantity").notNullable();
      tbl.text("measurement", 128).notNullable();
      tbl.integer("step").notNullable();
      tbl
        .integer("ingredients_id")
        .notNullable()
        .references("id")
        .inTable("ingredients")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipes")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("steps");
};
