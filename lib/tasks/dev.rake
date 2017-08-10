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
      password_confirmation: "123456"
    )
    User.last.add_role(:admin)

  end

  desc "Show app users and passwords"
  task auth: :environment do
    puts "Here are some accounts for you..."

    puts "Admin: #{User.with_role(:admin).first.email}"

    puts "All passwords are '123456'"
  end

end