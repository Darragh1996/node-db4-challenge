const db = require("../data/db-config");

function getRecipes() {
  return db("recipes");
}

function getRecipesById(id) {
  return db("recipes").where({ id });
}

function getStepsAtRecipeId(recipe_id) {
  return db("steps").where({ recipe_id });
}

module.exports = {
  getRecipes,
  getRecipesById,
  getStepsAtRecipeId
};
