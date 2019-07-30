set :application, "your-app"
set :deploy_to, "/your/path/to/deploy"

role :app, %w{your-user@your-server.com}
role :web, %w{your-user@your-server.com}
role :db,  %w{your-user@your-server.com}