class Backoffice::ProfilesController < BackofficeController

  before_action :set_user

  def show
  end

  def edit
  end

  def update
    if @user.update(profile_params)
      redirect_to backoffice_profile_path, notice: 'Profile was successfully updated.'
    else
      render :edit
    end
  end

  private
    def profile_params
      params.require(:user).permit(:name, :email, :bio, :image)
    end

    def set_user
      @user = User.me
    end

end