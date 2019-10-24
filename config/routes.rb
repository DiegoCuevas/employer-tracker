Rails.application.routes.draw do
  namespace :api do
    resources :users, :registers
  end
end
