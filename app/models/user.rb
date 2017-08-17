class User < ApplicationRecord
  devise :database_authenticatable, :trackable, :validatable

  validates_presence_of :name
  validates_presence_of :email
  rolify
  has_paper_trail

  mount_uploader :image, AvatarUploader

  def photo(size = 128)
    if self.image.empty?
      gravatar = Digest::MD5::hexdigest(email).downcase
      url = "https://gravatar.com/avatar/#{gravatar}.png?s=#{size}"
    else
      self.image
    end
  end

  def self.me
    with_role(:admin).first
  end

end
