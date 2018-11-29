class RecipesController < ApplicationController


    def index
        render json: Recipe.all
    end

    def create
        byebug
        @recipe = Recipe.create(recipe_params)
        render json: { recipe: Recipe.new(@recipe) }, status: :created
    end
  
    private

    def recipe_params
        params.require(:recipe).permit(:title, :time, :category, :description)
    end

end
