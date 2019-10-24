class ApiController < ActionController::API
  include Authentication
  include Pundit

  private
  
  def render_unauthorized(message)
    errors = { errors: { message: message } }
    render json: errors, status: :unauthorized
  end
end