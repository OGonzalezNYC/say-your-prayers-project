require 'Auth'
class Api::V1::SessionsController < ApplicationController

  def login
    user = user.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # render json: user
      render json: { token: Auth.createToken({ username: user.username, id: user.id }) } # Obviously, there is going to be an Auth class, whose instances will each have the ability to engage in create_token .
    else render json: { errors: { message: "Unable to find a user with that username or password."}}, status: 500
    end
  end
end
