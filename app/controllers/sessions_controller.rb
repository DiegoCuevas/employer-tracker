class SessionsController < ApiController
  skip_before_action :require_login, only: :create

  def create
    user = User.valid_login?(params[:email], params[:password])
    if user
      session[:user_id] = user.id
      render json: {}, status: :ok
    else
      render_unauthorized("NO LOGUEADO")
    end
  end

  def destroy
    session[:user_id] = nil
    @current_user = nil
    head :no_content
  end
end