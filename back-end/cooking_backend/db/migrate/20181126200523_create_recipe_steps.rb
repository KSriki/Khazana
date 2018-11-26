class CreateRecipeSteps < ActiveRecord::Migration[5.2]
  def change
    create_table :recipe_steps do |t|
      t.integer :recipe_id
      t.integer :step_num
      t.string :instruction
      t.string :image

      t.timestamps
    end
  end
end
