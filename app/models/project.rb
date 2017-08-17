class Project < ApplicationRecord

  validates_presence_of :name, :description, :url, :image

  mount_uploader :image, CoverUploader

end
