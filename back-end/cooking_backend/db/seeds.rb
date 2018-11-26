# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(username: "john", password: "cena", email: "skalaputapu@gmail.com")

recipe1 = Recipe.create(user_id: user1.id, title: "Peanut Butter Jelly Sandwich", category: "cold snack", time:"5 minutes")

ingredient1 = Ingredient.create(name:"Bread", pyramid: "Carbs")

recipe_step1 = RecipeStep.create(recipe_id: recipe1.id, step_num: 1, instruction: "Take 2 slices of bread and toast them")

step_ingredient1 = StepIngredient.create(recipe_step_id: recipe_step1.id, ingredient_id: ingredient1.id, amount: "2 slices")

# recipe_step2

# recipe_step3

# recipe_step4
