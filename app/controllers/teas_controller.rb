class TeasController < ApplicationController

    before_action :find_tea, only: [:show, :update, :destroy]

    def index
        render json: Tea.all
    end

    def create
        tea = Tea.create!(tea_params)
        render json: tea, status: :created
    end

    def show
        render json: @tea
    end

    def update
        @tea.update!(tea_params)
        render json: @tea
    end

    def destroy
        @tea.destroy
        head :no_content
    end

    private

    def find_tea
        @tea = Tea.find(params[:id])
    end
    
    def tea_params
        params.permit(:name, :image, :description, :ingredients, :origin)
    end

end
