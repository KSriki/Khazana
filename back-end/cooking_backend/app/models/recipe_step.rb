class RecipeStep < ApplicationRecord
    belongs_to :recipe
    has_many :step_ingredients
    has_many :ingredients, through: :step_ingredients
    validates :instruction, presence: true
    validates :step_num, presence: true

    #validates recipe step_num is not the same for the same recipe
    
    # validates_uniqueness_of :step_num, :scope => :recipe_id

end
