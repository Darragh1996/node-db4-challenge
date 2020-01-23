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

function getShoppingList(recipe_id) {
  return db("ingredients")
    .select("ingredients.name")
    .innerJoin("steps", "ingredients.id", "steps.ingredients_id")
    .where({ recipe_id });
}

module.exports = {
  getRecipes,
  getRecipesById,
  getStepsAtRecipeId,
  getShoppingList
};
