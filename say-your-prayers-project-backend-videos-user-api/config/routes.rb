Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      post '/signup', to: "users#signup" # goes to signup method of users controller
      post '/login', to: "users#login" # goes to login method of users controller
      get '/prayers', to: "games#index"
      resources :users # THIS LINE IS NOT IN THE VIDEO.
      resources :prayers # OBVIOUSLY, THIS LINE IS NOT IN THE VIDEO.
    end
  end
end
