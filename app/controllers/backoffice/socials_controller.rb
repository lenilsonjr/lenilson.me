class Backoffice::SocialsController < BackofficeController
  before_action :set_social, only: [:show, :edit, :update, :destroy]

  # GET /socials
  # GET /socials.json
  def index
    @socials = Social.all
  end

  # GET /socials/1
  # GET /socials/1.json
  def show
  end

  # GET /socials/new
  def new
    @social = Social.new
  end

  # GET /socials/1/edit
  def edit
  end

  # POST /socials
  # POST /socials.json
  def create
    @social = Social.new(social_params)

    respond_to do |format|
      if @social.save
        format.html { redirect_to @social, notice: 'Social was successfully created.' }
        format.json { render :show, status: :created, location: @social }
      else
        format.html { render :new }
        format.json { render json: @social.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /socials/1
  # PATCH/PUT /socials/1.json
  def update
    respond_to do |format|
      if @social.update(social_params)
        format.html { redirect_to @social, notice: 'Social was successfully updated.' }
        format.json { render :show, status: :ok, location: @social }
      else
        format.html { render :edit }
        format.json { render json: @social.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /socials/1
  # DELETE /socials/1.json
  def destroy
    @social.destroy
    respond_to do |format|
      format.html { redirect_to socials_url, notice: 'Social was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_social
      @social = Social.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def social_params
      params.require(:social).permit(:name, :link, :description, :icon)
    end
end
