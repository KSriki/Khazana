class StepIngredientsController < ApplicationController

    def index
        render json: StepIngredient.all
    end


end
