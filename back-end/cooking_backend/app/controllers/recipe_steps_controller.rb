class RecipeStepsController < ApplicationController
    def index
        render json: RecipeStep.all
    end


end
