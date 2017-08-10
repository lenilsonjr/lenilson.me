class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :trackable, :validatable
end
