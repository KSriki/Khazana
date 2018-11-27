class RecipeStepsController < ApplicationController
    def index
        allSteps = RecipeStep.all

        render json: RecipeStep.all
    end


end
