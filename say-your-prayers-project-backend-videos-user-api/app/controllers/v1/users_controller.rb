class Api::V1::UsersController < ApplicationController

  def signup #reactivate
    # params.inspect
    user = User.new(user_params) # reactivate
    if user.save # reactivate
     render json: { message: "Signup"} #deactivate
      # render json: user
#reactivate this line      render json: { token: Auth.create_token(user) } # Obviously, there is going to be an Auth class, whose instances will each have the ability to engage in create_token .

    else
      render json: { errors: user.errors.full_messages }, status: 500
    end
  end

  private
    def user_params
      params.require(:user).permit(:username, :password)
    end
  # def index
  #   @users = User.all
  #   render json: @users, status: 200
  # end
  #
  # def show
  #   @user = User.find(params[:id])
  #   render json: @user, status: 200
  # end
  #
  # def create
  #   @user = User.create(user_params)
  #   render json: @user, status: 200
  # end
  #
  # def update
  #   @user = User.find(params[:id])
  #   @user.update(params[:id])
  #   render json: @user, status: 200
  # end
  #
  # def destroy
  #   @user = User.find(params[:id])
  #   @user.delete
  #   render json: {userId: user.id}
  # end
  #
  #
  # private
  # def user_params
  #   params.require(:user).permit(:user, :password)
  # end
end
