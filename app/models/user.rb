class User < ApplicationRecord
  has_many :register
  has_secure_password
  has_secure_token


  def invalidate_token
    update(token: nil)
  end

  def admin?
    user.role == "Admin"
  end

  def employe?
    user.role == "Employe"
  end


  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user && user.authenticate(password)
  end
end
