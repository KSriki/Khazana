class RecipeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :title, :category, :time, :description
end
