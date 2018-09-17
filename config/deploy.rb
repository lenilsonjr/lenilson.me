set :repo_url, "git@github.com:lenilsonjr/lenilson.me.git"
set :use_sudo, false
set :keep_releases, 3
set :linked_files, fetch(:linked_files, []).push('now.env', 'assets/now.json')
set :format, :pretty

namespace :deploy do
  task :update_jekyll do
    on roles(:app) do
      within "#{deploy_to}/current" do
      	execute "/usr/share/rvm/gems/ruby-2.3.3/wrappers/jekyll", "build"
      end
    end
  end
end

after "deploy:symlink:release", "deploy:update_jekyll"
