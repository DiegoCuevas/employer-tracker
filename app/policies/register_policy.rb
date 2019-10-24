class RegisterPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      p user.role
      if user.admin?
        scope.all
      else
        scope.where(user: user)
      end
    end
  end

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
