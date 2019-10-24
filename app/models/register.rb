class Register < ApplicationRecord
  belongs_to :user

  def report
    {
      name: user.name, 
      entry_day: entry.strftime("%d %B %Y"), 
      entry: entry.to_s(:time), 
      exit_day: exit.strftime("%d %B %Y"), 
      exit: exit.to_s(:time) 
    }
  end
end
