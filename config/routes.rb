Rails.application.routes.draw do
  root "registration#index"

  get "/registration", to: "registration#index"
end
