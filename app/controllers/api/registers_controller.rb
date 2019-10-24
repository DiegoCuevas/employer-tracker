class Api::RegistersController < ApiController
  
    def index
    render json: Register.all
  end

  def show
    render json: Register.find(params[:id])
  end

  def create
    render json: Register.create(register_params)
  end

  def update
    render json: Register.find(params[:id].update(register_params))
  end

  def delete
    register = Register.find_by(id: params[:id])
    register.destroy
    render :status => :no_content
  end

  private 
  
  def register_params
    params.permit(:entry, :exit)
  end
end