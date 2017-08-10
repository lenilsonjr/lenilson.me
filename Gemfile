source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end


# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '~> 5.0.4'
# Use mysql as the database for Active Record
gem 'mysql2', '>= 0.3.18', '< 0.5'
# Use Puma as the app server
gem 'puma', '~> 3.0'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.2'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes navigating your web application faster. Read more: https://github.com/turbolinks/turbolinks
gem 'turbolinks', '~> 5'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.5'
# Use Redis adapter to run Action Cable in production
# gem 'redis', '~> 3.0'
# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

############ MY GEMS ############
# Flexible authentication solution for Rails
gem 'devise'
# Authorization gem
gem 'rolify'
# The authorization Gem for Ruby on Rails
#gem 'cancancan'
# Forms made easy for Rails!
gem 'simple_form'
# Wrappers for JavaScript alert(), confirm() and other flexible dialogs using Twitter's bootstrap framework for Rails 3.1+
gem 'bootbox-rails', '~>0.4'
#Create beautiful JavaScript charts with one line of Ruby
gem 'chartkick'
#Add pickadate.js to your Rails 3.1+ app
gem 'pickadate-rails'
gem 'momentjs-rails'
#Filterrific is a Rails Engine plugin that makes it easy to filter, search, and sort your ActiveRecord lists.
gem 'filterrific'
#Client Side Validations made easy for Ruby on Rails
gem 'client_side_validations'
#SimpleForm plugin for ClientSideValidations
gem 'client_side_validations-simple_form'
#Track changes to your models' data. Good for auditing or versioning.
gem 'paper_trail'
#ActiveRecord plugin allowing you to hide and restore records without actually deleting them.
#gem "paranoia", "~> 2.2"
# A Scope & Engine based, clean, powerful, customizable and sophisticated paginator for modern web app frameworks and ORMs
gem 'kaminari'
#Haml-rails provides Haml generators for Rails 4. It also enables Haml as the templating engine for you, so you don't have to screw around in your own application.rb when your Gemfile already clearly indicated what templating engine you have installed.
gem "haml-rails"
#the font-awesome font bundled as an asset for the rails asset pipeline
gem "font-awesome-rails"
# Gritter
gem 'gritter', '1.2.0'
#Autocomplete/typeahead input with Bootstrap 3 and Rails 4. Works with SimpleForm
#gem 'bootstrap3_autocomplete_input'
#Integration of RubyMoney - Money with Rails
#gem 'money-rails', '~>1'
#The simplest way to group temporal data
gem 'groupdate'
#Dynamic nested forms using jQuery made easy;
gem "cocoon"

source 'https://rails-assets.org' do
  # Animated css
  gem 'rails-assets-animate-css'
  # Bootstrap
  gem 'rails-assets-bootstrap', '3.3.7'
  #Igor Escobar jQuery Masks
  gem 'rails-assets-jQuery-Mask-Plugin'
end
########### END OF MY GEMS ##########


group :development, :test do
  gem 'faker', github: 'stympy/faker'
  gem 'cpf_faker'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platform: :mri
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> anywhere in the code.
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '~> 3.0.5'
  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
