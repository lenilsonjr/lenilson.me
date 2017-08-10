class User < ApplicationRecord
  devise :database_authenticatable, :trackable, :validatable

  validates_presence_of :name
  validates_presence_of :email
  rolify
  has_paper_trail

  def photo(size = 128)
    gravatar = Digest::MD5::hexdigest(email).downcase
    url = "https://gravatar.com/avatar/#{gravatar}.png?s=#{size}"
  end

  def self.me
    with_role(:admin).first
  end

end
