class SessionsController < ApplicationController

    skip_before_action :authorize, only: :login
  
    def login
      user = User.find_by(username: params[:username])
      if user&.authenticate(params[:password])
        session[:user_id] = user.id
        render json: user
      else
        render json: { errors: ["Invalid username or password"] }, status: :unauthorized
      end
    end
  
    def logout
      if session[:user_id] != nil
        session.delete :user_id
        head :no_content
      else
        render json: { errors: "Not Authorized"}, status: :unauthorized
      end
    end
  
end
