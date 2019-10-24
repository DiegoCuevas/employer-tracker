module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :require_login
  end

  def require_login
    authenticate_token || render_unauthorized('Access denied')
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  private

  def render_unauthorized(message)
    errors = { errors: { message: message } }
    render json: errors, status: :unauthorized
  end

  def authenticate_token
    User.find(session[:user_id]) if session[:user_id]
  end
end