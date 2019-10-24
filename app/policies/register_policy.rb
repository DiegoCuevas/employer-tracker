class RegisterPolicy < ApplicationPolicy
  def index?
    user.admin? || user.employe?
  end

  def show?
    user.admin? || user.employe?
  end
  
  def create?
    user.admin?
  end
  
  def update?
    user.admin?
  end

  def delete?
    user.admin?
  end
end
