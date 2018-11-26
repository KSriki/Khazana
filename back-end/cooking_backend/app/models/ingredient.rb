class Ingredient < ApplicationRecord
    has_many :step_ingredients
    has_many :recipe_steps, through: :step_ingredients
end
