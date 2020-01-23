exports.seed = function(knex) {
  return knex("steps").insert([
    {
      instruction: "pour into bowl",
      quantity: 1,
      measurement: "bowl-full",
      step: 1,
      ingredients_id: 3,
      recipe_id: 1
    },
    {
      instruction: "pour into bowl",
      quantity: 1,
      measurement: "bowl-full",
      step: 2,
      ingredients_id: 1,
      recipe_id: 1
    },
    {
      instruction: "put in toaster",
      quantity: 1,
      measurement: "slice",
      step: 1,
      ingredients_id: 2,
      recipe_id: 2
    },
    {
      instruction: "spread onto toast",
      quantity: 1,
      measurement: "bit-of-butter",
      step: 2,
      ingredients_id: 6,
      recipe_id: 2
    },
    {
      instruction: "put in mug",
      quantity: 1,
      measurement: "bag",
      step: 1,
      ingredients_id: 7,
      recipe_id: 3
    },
    {
      instruction: "boil in kettle",
      quantity: 1,
      measurement: "kettle-full",
      step: 2,
      ingredients_id: 5,
      recipe_id: 3
    },
    {
      instruction: "pour from kettle into mug",
      quantity: 0.5,
      measurement: "cup-full",
      step: 3,
      ingredients_id: 5,
      recipe_id: 3
    },
    {
      instruction: "add to mug and stir",
      quantity: 1,
      measurement: "tea spoon",
      step: 4,
      ingredients_id: 4,
      recipe_id: 3
    },
    {
      instruction: "remove from mug",
      quantity: -1,
      measurement: "bag",
      step: 5,
      ingredients_id: 7,
      recipe_id: 3
    },
    {
      instruction: "add to mug and stir",
      quantity: 1,
      measurement: "splash",
      step: 5,
      ingredients_id: 1,
      recipe_id: 3
    }
  ]);
};
