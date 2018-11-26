class ChangeTypeInIngredients < ActiveRecord::Migration[5.2]
  def change
    rename_column :ingredients, :type, :pyramid
  end
end
