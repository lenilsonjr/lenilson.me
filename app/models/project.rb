class Project < ApplicationRecord

  validates_presence_of :name, :description, :url, :image

end
