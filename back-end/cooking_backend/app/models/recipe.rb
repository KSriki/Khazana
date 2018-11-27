class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_steps
    has_many :step_ingredients, through: :recipe_steps
    validates :title, presence: true

end
