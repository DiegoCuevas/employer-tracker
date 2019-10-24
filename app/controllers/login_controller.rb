class LoginController < ApplicationController
  skip_before_action :require_login, :redirect_if_logged

  def index
    redirect_to root_path if current_user
  end
end
