class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :update]
    before_action :find_user, only: [:update]
    
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

    def update
        @user.update!(user_params_for_update)
        render json: user
    end

    private

    def find_user
        @user = User.find(params[:id])
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :bio, :picture)
    end

    def user_params_for_update
        params.permit(:bio)
    end

end
