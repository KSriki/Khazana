class StepIngredient < ApplicationRecord
    belongs_to :recipe_step
    belongs_to :ingredient
end
