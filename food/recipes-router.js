const express = require("express");

const Recipes = require("./recipes-model");

const router = express.Router();

router.get("/", (req, res) => {
  Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: "could not get recipes" });
    });
});

router.get("/:id", (req, res) => {
  Recipes.getRecipesById(req.params.id)
    .then(recipe => {
      res.json(recipe);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: `could not get recipe at ${req.params.id}` });
    });
});

router.get("/:recipe_id/steps", (req, res) => {
  Recipes.getStepsAtRecipeId(req.params.recipe_id)
    .then(steps => {
      res.json(steps);
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: "could not get steps at specified recipe_id" });
    });
});

module.exports = router;
