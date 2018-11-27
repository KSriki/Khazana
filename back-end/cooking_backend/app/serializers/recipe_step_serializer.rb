class RecipeStepSerializer < ActiveModel::Serializer
  attributes :id, :recipe_id, :step_num, :instruction, :image
  has_many :step_ingredients
  has_many :ingredients, through: :step_ingredients
  
end
