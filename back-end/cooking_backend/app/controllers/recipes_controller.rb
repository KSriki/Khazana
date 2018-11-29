class RecipesController < ApplicationController


    def index
        render json: Recipe.all
    end

    def create

        @recipe = Recipe.create(recipe_params)
        render json: { recipe: Recipe.new(@recipe) }, status: :created
    end


    # needs recipesteps and the rest -> serialize it after ?

    def show
        rec_id = params[:id].to_i
        recipe = Recipe.find(rec_id)

        recipe_steps = recipe.recipe_steps
        # one to one step ingredients to ingredients when coming from recipe-steps
        
    
        # byebug
        step_ingredients = recipe_steps.map{ |rs| 
            {       
                    step_num: rs.step_num,
                    step_image: rs.image,
                    instruction: rs.instruction,
                    step_ingredients: rs.step_ingredients.map{ |si| 
                        {amount: si.amount, ingredient: {name: si.ingredient.name, pyramid: si.ingredient.pyramid } }
                    } 
                
            }
            
        }
        
        
            
     
        render json: {recipe: recipe, recipe_steps: step_ingredients }, status: :accepted
    end

  
    private

    def recipe_params
        params.require(:recipe).permit(:title, :time, :category, :description)
    end

end
