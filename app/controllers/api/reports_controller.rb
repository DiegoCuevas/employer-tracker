class Api::ReportsController < ApiController
  def index
    employe = User.where(role: "Employe")
    render json: employe.map(&:report).flatten
  end
end