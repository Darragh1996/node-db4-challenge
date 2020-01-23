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

module.exports = router;
