Rails.application.routes.draw do
  resources :recipes
  resources :ingredients, only: [:create,:show, :index]
  resources :recipe_steps, only: [:create, :show, :index]
  resources :step_ingredients, only: [:create, :show, :index]
  resources :users, only: [:create]
  post '/login', to: 'auth#create'
  get '/profile', to: 'users#profile'
  # get the ingredients for the specific recipe
  

end
