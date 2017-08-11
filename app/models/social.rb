class Social < ApplicationRecord

  validates_presence_of :name, :icon, :description, :link

end
