class ApiController < ActionController::API
  include Authentication
  include Pundit

  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized

  private

  def user_not_authorized
    render_unauthorized("This user doesn't have permissions")
  end
  
  def render_unauthorized(message)
    errors = { errors: { message: message } }
    render json: errors, status: :unauthorized
  end
end