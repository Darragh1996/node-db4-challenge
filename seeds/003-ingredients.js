exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "milk" },
    { name: "bread" },
    { name: "cereal" },
    { name: "sugar" },
    { name: "water" },
    { name: "butter" },
    { name: "tea bag" }
  ]);
};
