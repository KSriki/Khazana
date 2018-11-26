# CookingForMillenials


Resume
Yearbook for Flatiron

Tests for code
-> in general, immediate payoff
-> JUNIT or general
-> create-react-app has JEST test framework
-> ENZYME -> snapshot testing enzyme makes it for you! a snapshot 

Component Hierarchy

App
    - Navbar
        -Search
    - MainContainer
        - Login
        - Profile
            -MyRecipes
                -RecipeList
                    -RecipeItem
                -RecipeForm
                    -Ingredients
                    -Directions
                    -Image - optional or part of directions
        - RecipeCatalog
            -RecipeCard
                -RecipeShow

Redux ?

Learning to add redux

DB Relations

Example found for recipe directions:
http://www.databaseanswers.org/data_models/recipes/index.htm

Users
Recipes HAS MANY R-S
Recipe-Steps HAS MANY S-I
    -step number
    -instructions
    -image
Steps-Ingredients (joiner) 
    -amount
Ingredients HAS MANY S-I
    -type
    -name

Explanations: 
Recipes have many Steps
Steps may have more than one ingredient used
Ingredients can be reused in multiple steps

Controller Routes so far:

resources :users, only: [:create] -> sign up and create new user page

post '/login', to: 'auth#create' -> new 'session' so get token
get '/profile', to: 'users#profile' ->get profile information if logged in/have token
