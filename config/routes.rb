Rails.application.routes.draw do
  get 'registration/new', to: 'registration#new', as: 'new_registration'
  post 'registration', to: 'registration#create', as: 'create_registration'
  
  resources :users, only: [:index]
  
  root 'users#index'
end