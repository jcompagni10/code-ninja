Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: JSON } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:show, :create]
    resources :level_sets, only: [:index]
  end
end
