class User < ApplicationRecord
  has_many :registers
  has_secure_password
  has_secure_token

  def invalidate_token
    update(token: nil)
  end

  def admin?
    role == "Admin"
  end

  def employe?
    role == "Employe"
  end


  def self.valid_login?(email, password)
    user = find_by(email: email)
    user if user&.authenticate(password)
  end
end
