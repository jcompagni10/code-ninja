class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
    login(@user)
    render :show
    else
    render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
    render :show
    else
    render json: {}, status: 404
    end
  end

  def index
    query = params[:search]
    if query.empty? 
      render json: {results: []}
      return 
    end
    @users = User.where("LOWER(username) like LOWER(\'%#{query}%\')")
    render :index
  end

  private
    def user_params
      params.require(:user).permit(:username, :password, :email)
    end
end
