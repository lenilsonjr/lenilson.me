Rails.application.routes.draw do

  namespace :backoffice do
    root to: 'dashboard#index', as: :root
    resources :projects
    resources :socials
    resources :settings, except: [:show]
    resource :profile, only: [:show, :update, :edit]
  end

  #Mount devise on /backoffice path
  devise_for :users, path: '/backoffice'

  root to: 'frontoffice/home#index'

end
