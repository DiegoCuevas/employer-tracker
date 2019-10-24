Rails.application.routes.draw do
  root to: "home#index"
  namespace :api do
    resources :users do 
      resources :registers
    end
    resources :reports
  end

  get "/login", to: "login#index"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  
  get "*path", to: "home#index", constraints: { format: "html" }

end
