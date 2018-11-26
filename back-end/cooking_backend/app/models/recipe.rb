class Recipe < ApplicationRecord
    belongs_to :user
    has_many :recipe_steps
    validates :title, presence: true

end
