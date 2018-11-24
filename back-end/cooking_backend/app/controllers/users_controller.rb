class UsersController < ApplicationController

    def profile
        render json: {user: UserSerializer.new()}, status: :accepted
    end

    
end
