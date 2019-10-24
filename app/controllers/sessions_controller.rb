class SessionsController < ApiController
  skip_before_action :require_login, only: :create

  def create
    user = User.valid_login?(params[:email], params[:password])
    session[:user_id] = user.id
  end

  def destroy
    session[:user_id] = nil
    @current_user = nil
    head :no_content
  end
end