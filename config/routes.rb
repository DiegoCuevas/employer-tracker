Rails.application.routes.draw do
  root to: "home#index"
  namespace :api do
    resources :users do 
      resources :registers
    end
  end
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "*path", to: "home#index", constraints: { format: "html" }

end
