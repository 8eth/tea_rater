class TeasController < ApplicationController
    def index
        teas = Tea.all
        render json: teas
    end

    def create
        tea = Tea.create(tea_params)
        render json: tea, status: :created
    end

    def show
        tea = find_tea
        render json: tea
    end

    def update
        tea = find_tea
        tea.update(tea_params)
        render json: tea
    end

    def destroy
        tea = find_tea
        tea.destroy
        head :no_content
    end

    private

    def find_tea
        Tea.find(params[:id])
    end
    
    def tea_params
        params.permit(:name, :image, :description, :ingredients, :origin)
     end
end
