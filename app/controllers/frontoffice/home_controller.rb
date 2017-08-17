class Frontoffice::HomeController < FrontofficeController
  def index
    @projects = Project.where(highlighted: true)
  end
end
