class AuthController < ApplicationController

    # login
    def create

        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])


        else
            # bad post fetch request or wrong password - give error

        end
        render "Hello"

    end
end
