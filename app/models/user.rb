class User < ApplicationRecord
  has_many :registers
  has_secure_password
  has_secure_token

  def report
    registers.map do |register|
      {
        name: name, 
        entry_day: register.entry.strftime("%d %B %Y"), 
        entry: register.entry.to_s(:time), 
        exit_day: register.exit.strftime("%d %B %Y"), 
        exit: register.exit.to_s(:time) 
      }
    end
  end 

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
    user if user && user.authenticate(password)
  end
end
