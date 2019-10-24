class Api::RegistersController < ApiController
  
  def index
    render json: Register.where(user_id: params[:user_id])
  end

  def show
    register = Register.find(params[:id])
    if register.user_id == params[:user_id]
      render json: register
    else
      render json: "Unauthorized", status: :unauthorized
    end
  end

  def create
    authorize Register
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
    params.permit(:user_id, :entry, :exit)
  end
end