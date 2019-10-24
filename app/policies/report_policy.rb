class RegisterPolicy < ApplicationPolicy
  def index?
    user.admin?
  end
end