module Authentication
  extend ActiveSupport::Concern

  included do
    before_action :require_login
  end

  def require_login
    current_user || render_unauthorized('Access denied')
  end

  def current_user
    @current_user ||= User.find(session[:user_id]) if session[:user_id]
  end

  private

  def render_unauthorized(message)
    errors = { errors: { message: message } }
    render json: errors, status: :unauthorized
  end
end