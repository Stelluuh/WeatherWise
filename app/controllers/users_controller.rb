class UsersController < ApplicationController

    def index
        render json: User.all
    end 

    private 
    def user_params
        params.permit(:username, :password)
    end
end
