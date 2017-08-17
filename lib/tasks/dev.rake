namespace :dev do

  desc "Setup development enviroment"
  task setup: :environment do

    puts "Setting up development enviroment..."

    puts %x(rake db:drop)
    %x(rake db:create)
    puts %x(rake db:schema:load)

    puts " "

    puts "Generating roles"
    %x(rake dev:g_roles)
    puts "Roles ok. Moving on..."

    puts " "

    puts "Gerating users"
    %x(rake dev:g_users)
    puts "Users ok. Moving on..."

    puts " "

    puts "Gerating social media"
    %x(rake dev:g_social)
    puts "Social media ok. Moving on..."

    puts " "

    puts "Gerating projects"
    %x(rake dev:g_projects)
    puts "Projects ok. Moving on..."

    puts " "

    puts "Gerating settings"
    %x(rake dev:g_settings)
    puts "Settings ok. Moving on..."

    puts " "

    puts "Enviroment ok! Restart Rails!"

    puts " "
    puts %x(rake dev:auth)
  end

  desc "Generate roles"
  task g_roles: :environment do
    Role.create(id: 1, name: :admin)
  end

  desc "Generate users"
  task g_users: :environment do

    User.create!(
      email: "admin@demo.com",
      name: Faker::Name.name,
      password: "123456",
      password_confirmation: "123456",
      bio: 'Just another Geek'
    )
    User.last.add_role(:admin)

  end

  desc "Generate social media"
  task g_social: :environment do

    Social.create(name: 'github', 
                  link: 'https://github.com/lenilsonjr', 
                  icon: 'github', 
                  description: 'open source is not much my thing')
    Social.create(name: 'twitter', 
                  link: 'https://twitter.com/lenilson__jr', 
                  icon: 'twitter', 
                  description: 'this account is fake ignore those tweets')
    Social.create(name: 'telegram', 
                  link: 'https://telegram.me/lenilsonjr', 
                  icon: 'telegram', 
                  description: 'talk to me pls')
    Social.create(name: 'instagram', 
                  link: 'https://instagram.com/lenilsonjr', 
                  icon: 'instagram', 
                  description: 'my life is not that cool')

  end

  desc "Generate projects"
  task g_projects: :environment do

    rand(3..6).times do 
      Project.create(name: Faker::HitchhikersGuideToTheGalaxy.character,
                    description: Faker::HitchhikersGuideToTheGalaxy.marvin_quote,
                    url: Faker::Internet.domain_name,
                    image: Faker::Avatar.image)
    end

  end

  desc "Generate settings"
  task g_settings: :environment do

    Setting.create(key: 'title', value: 'lenilson.codes')
    Setting.create(key: 'description', value: 'web development, life, the universe, and everything else')

  end

  desc "Show app users and passwords"
  task auth: :environment do
    puts "Here are some accounts for you..."

    puts "Admin: #{User.with_role(:admin).first.email}"

    puts "All passwords are '123456'"
  end

end