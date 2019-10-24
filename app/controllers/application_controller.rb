class ApplicationController < ActionController::Base
  include Authentication

  before_action :redirect_if_logged

  def redirect_if_logged
    redirect_to login_path unless current_user
  end

  def render_unauthorized(message)
    redirect_to login_path
  end
end