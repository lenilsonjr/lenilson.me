set :repo_url, "git@github.com:lenilsonjr/lenilson.me.git"
set :use_sudo, false
set :keep_releases, 3
set :linked_files, fetch(:linked_files, []).push('now.json')
