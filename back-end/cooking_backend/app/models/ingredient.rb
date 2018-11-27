class Ingredient < ApplicationRecord
    has_many :step_ingredients
    has_many :recipe_steps, through: :step_ingredients

    #maybe convert the name into lower case and remove spaces to be consistent?
    # jelly vs JELLY is the same ?
    validates :name, uniqueness: true
    validates :name, presence: true
    
end
