class User < ApplicationRecord
  has_many :register
  has_secure_password

  def admin?
    role == "Admin"
  end

  def employe?
    role == "Employe"
  end


  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user && user.authenticate(password)
  end
end
