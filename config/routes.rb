Rails.application.routes.draw do

  namespace :backoffice do
    get '/', to: 'backoffice/dashboard#index'
    resources :projects
    devise_for :users
  end

  root to: 'frontoffice/home#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
