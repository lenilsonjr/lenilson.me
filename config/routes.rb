Rails.application.routes.draw do
  namespace :frontoffice do
    get 'home/index'
  end

  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
