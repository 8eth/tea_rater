class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def index
        render json: User.all
    end

    def show
        user_id = User.find_by(id: session[:user_id])
        render json: user_id, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:current_user] = user.id
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio)
    end

end
