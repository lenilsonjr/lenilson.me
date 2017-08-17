class Backoffice::SettingsController < BackofficeController
  before_action :set_setting, only: [:show, :edit, :update, :destroy]

  # GET /backoffice/settings
  # GET /backoffice/settings.json
  def index
    @settings = Setting.all
  end

  # GET /backoffice/settings/new
  def new
    @setting = Setting.new
  end

  # GET /backoffice/settings/1/edit
  def edit
  end

  # POST /backoffice/settings
  # POST /backoffice/settings.json
  def create
    @setting = Setting.new(setting_params)

    respond_to do |format|
      if @setting.save
        format.html { redirect_to backoffice_settings_path, notice: 'Setting was successfully created.' }
      else
        format.html { render :new }
      end
    end
  end

  # PATCH/PUT /backoffice/settings/1
  # PATCH/PUT /backoffice/settings/1.json
  def update
    respond_to do |format|
      if @setting.update(setting_params)
        format.html { redirect_to backoffice_settings_path, notice: 'Setting was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

  # DELETE /backoffice/settings/1
  # DELETE /backoffice/settings/1.json
  def destroy
    @setting.destroy
    respond_to do |format|
      format.html { redirect_to backoffice_settings_url, notice: 'Setting was successfully destroyed.' }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_setting
      @setting = Setting.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def setting_params
      params.require(:setting).permit(:key, :value)
    end
end
