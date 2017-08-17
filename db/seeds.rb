# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Role.create(id: 1, name: :admin)

Social.create(name: 'github', 
              link: 'https://github.com/lenilsonjr', 
              icon: 'github-square', 
              description: 'open source is not much my thing')
Social.create(name: 'twitter', 
              link: 'https://twitter.com/lenilson__jr', 
              icon: 'twitter-square', 
              description: 'this account is fake ignore those tweets')
Social.create(name: 'telegram', 
              link: 'https://telegram.me/lenilsonjr', 
              icon: 'telegram', 
              description: 'talk to me pls')
Social.create(name: 'instagram', 
              link: 'https://instagram.com/lenilsonjr', 
              icon: 'instagram', 
              description: 'my life is not that cool')

User.create!(
  email: "me@lenilson.codes",
  name: "Lenilson Jr.",
  password: "123456",
  password_confirmation: "123456",
  bio: 'Just another Geek'
)
User.last.add_role(:admin)

Setting.create(key: 'title', value: 'lenilson.codes')
Setting.create(key: 'description', value: 'web development, life, the universe, and everything else')
