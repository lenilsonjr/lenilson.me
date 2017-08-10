Rails.application.routes.draw do

  namespace :backoffice do
    root to: 'dashboard#index', as: :backoffice_root
    resources :projects
  end

  #Mount devise on /backoffice path
  devise_for :users, path: '/backoffice'

  root to: 'frontoffice/home#index'

end
