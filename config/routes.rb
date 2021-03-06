Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: JSON } do
  resource :session, only: [:create, :destroy]
  resources :users, only: [:show, :create, :index]
  resources :level_sets, only: [:index]
  resources :bots, only: [:index, :show]
  resources :tasks, only: [:show]
  resources :challenges, only: [:index]
  resources :head_to_head_results, only: [:index, :create]
  resources :user_solutions, only: [:show]
  resources :user_bot_completions, only: [:create, :update]
  post "/submit", to: 'user_solutions#submit'
  end
end
