class Api::UsersController < ApiController
  
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def create
    render json: User.create(user_params)
  end

  def update
    render json: User.find(params[:id].update(user_params))
  end

  def delete
    article = Article.find_by(id: params[:id])
    article.destroy
    render :status => :no_content
  end

  private 
  
  def user_params
    params.permit(:name, :last_name, :age, :role)
  end
end