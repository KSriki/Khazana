# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: "john", password: "cena", email: "skalaputapu@gmail.com")

recipe1 = Recipe.create(user_id: user1.id, title: "Peanut Butter Jelly Sandwich", category: "cold snack", time:"5 minutes", description: "A simple PB&J sandwich for those wanting a quick meal. Requires a toaster.")

#uniqueness of ingredients names ?
ingredient1 = Ingredient.create(name:"Bread", pyramid: "Carbs")
ingredient2 = Ingredient.create(name:"Peanut Butter", pyramid: "Carbs")
ingredient3 = Ingredient.create(name:"Jelly", pyramid: "Carbs")

recipe_step1 = RecipeStep.create(recipe_id: recipe1.id, step_num: 1, instruction: "Take 2 slices of bread and toast them")
recipe_step2 = RecipeStep.create(recipe_id: recipe1.id, step_num: 2, instruction: "Using a knife, spread peanut butter on one side of one of the toasts")
recipe_step3 = RecipeStep.create(recipe_id: recipe1.id, step_num: 3, instruction: "Using a knife, spread jelly on one side of the other toast")
recipe_step3 = RecipeStep.create(recipe_id: recipe1.id, step_num: 4, instruction: "Place pieces of bread on top of each other with spread sides facing each other")

#maybe limiting number as last step ? To Prevent infinite steps  and looping ?

step_ingredient1 = StepIngredient.create(recipe_step_id: recipe_step1.id, ingredient_id: ingredient1.id, amount: "2 slices")
step_ingredient2 = StepIngredient.create(recipe_step_id: recipe_step2.id, ingredient_id: ingredient2.id, amount: "2 spoons")
step_ingredient3 = StepIngredient.create(recipe_step_id: recipe_step3.id, ingredient_id: ingredient3.id, amount: "2 spoons")

# recipe_step2

# recipe_step3

# recipe_step4
