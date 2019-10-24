class ApplicationController < ActionController::Base
  include Authentication

  def render_unauthorized(message)
    redirect_to login_path
  end
end