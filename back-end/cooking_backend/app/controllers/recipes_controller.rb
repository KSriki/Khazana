class RecipesController < ApplicationController


    def index
        render json: Recipe.all
    end


    def create
        token = request.headers["Authorization"].split(' ')[1]
        payload = decode(token)
        user_id = payload["user_id"]
        
        create_recipe = params["create_recipe"]
        @recipe = Recipe.create(title: create_recipe["title"], time: create_recipe["time"], category: create_recipe["category"], description: create_recipe["description"], user_id: user_id)
     
        ingredients = create_recipe["ingredients"]

        step_ingredients = []

        create_recipe["steps"].each_with_index do |step, index|
         
            # 
            inst = step["instruction"]

            s_ings = step["step_ingredients"]

            recstep = RecipeStep.create(recipe_id: @recipe.id, step_num: index+1, instruction: inst, image: "" )

              step_ingredients = step["step_ingredients"]

              step_ingredients.each_with_index do |si, index|
                    ing_name = si.keys()[0] 
                    ing_amount = si["amount"]
                    # byebug
                    found = Ingredient.find_by(name: ing_name)
                    if found
                        si = StepIngredient.create(amount: ing_amount, recipe_step_id: recstep.id, ingredient_id: found.id)
                    else 
                        # make new ingredient  
                        new_ing = Ingredient.create(name: ing_name)
                        si = StepIngredient.create(amount: ing_amount, recipe_step_id: recstep.id, ingredient_id: new_ing.id)
                    end
              end

            
            

        end


        # new_ings = []

        # # add all ingredients at once or based on step.

        # ingredients.each_with_index do |ingred, index|
        #     byebug
        #     ing = ingred[index.to_s]
        #     # amount and name - see if name is already in there
        #     found = Ingredient.find_by(name: ing["name"])
        #     if found
        #         new_ings.push(found);
        #     else 
        #           # make new ingredient  
        #         new_ing = Ingredient.create(name: ing["name"])
        #         new_ings.push()
        #     end
        # end
        parse_recipe(@recipe.id)

        # render json: { recipe: Recipe.new(@recipe) }, status: :created
    end


    # needs recipesteps and the rest -> serialize it after ?

    #remove parsing into own function and use in create and show

    def show
            
        rec_id = params[:id].to_i
        recipe = Recipe.find(rec_id)
        # find user name for recipe
        
        username = recipe.user.username;

        # get all ingredients from step ingredients ?
        ingredients = []

        recipe_steps = recipe.recipe_steps
        # one to one step ingredients to ingredients when coming from recipe-steps
        
        # recipe ingredients
  
    
     
        step_ingredients = recipe_steps.map{ |rs| 
            {          
                    step_num: rs.step_num,
                    step_image: rs.image,
                    instruction: rs.instruction,
                    step_ingredients: rs.step_ingredients.map{ |si| 
                        {amount: si.amount, ingredient: {name: si.ingredient.name} }
                    } 
                
            }
            
        }

        
        step_ingredients.each do |si|
            # byebug   
            ings = si[:step_ingredients]
            ings.each do |ing|
                if ing[:amount] 
                    ing_total = ing[:amount] + " " + ing[:ingredient][:name] 
                    if !ingredients.include?(ing_total)
                        ingredients.push(ing_total)   
                    end
                else
                    ing_total = ing[:ingredient][:name] 
                    if !ingredients.include?(ing_total)
                        ingredients.push(ing_total)   
                    end
                end
            end
        end
        
        # fix time to string
     
        render json: {username: username, recipe: recipe, ingredients: ingredients, recipe_steps: step_ingredients }, status: :accepted
    end



  
    private

    #  another params for create recipe?
    
    def parse_recipe(id)
        rec_id = id
        recipe = Recipe.find(rec_id)
        # find user name for recipe
        
        username = recipe.user.username;

        # get all ingredients from step ingredients ?
        ingredients = []

        recipe_steps = recipe.recipe_steps
        # one to one step ingredients to ingredients when coming from recipe-steps
        
        # recipe ingredients
  
    
        # Step 
        step_ingredients = recipe_steps.map{ |rs| 
            {       
                    step_num: rs.step_num,
                    step_image: rs.image,
                    instruction: rs.instruction,
                    step_ingredients: rs.step_ingredients.map{ |si| 
                        {amount: si.amount, ingredient: {name: si.ingredient.name} }
                    } 
                
            }
            
        }

        
        step_ingredients.each do |si|
             
            ings = si[:step_ingredients]
            ings.each do |ing|
                if ing[:amount] 
                    ing_total = ing[:amount] + " " + ing[:ingredient][:name] 
                    if !ingredients.include?(ing_total)
                        ingredients.push(ing_total)   
                    end
                else
                    ing_total = ing[:ingredient][:name] 
                    if !ingredients.include?(ing_total)
                        ingredients.push(ing_total)   
                    end
                end

            end
        end
        
        # fix time to string
     
        render json: {username: username, recipe: recipe, ingredients: ingredients, recipe_steps: step_ingredients }, status: :accepted

    end

    def recipe_params
        params.require(:recipe).permit(:title, :time, :category, :description, :thumbnail)
    end

end
