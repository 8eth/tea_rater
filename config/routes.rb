 Rails.application.routes.draw do

  resources :teas  
  resources :reviews
  resources :users, except: [:destroy]

  get "/authorize", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#login"
  delete "/logout", to: "sessions#logout"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
    
end
