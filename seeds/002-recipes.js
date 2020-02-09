exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "bowl of cereal" },
    { name: "toast" },
    { name: "tea" }
  ]);
};
