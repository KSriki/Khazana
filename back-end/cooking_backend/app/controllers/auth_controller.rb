class AuthController < ApplicationController

    # login
    def create

        @user = User.find_by(username: params[:username])
        if @user && @user.authenticate(params[:password])
            # make payload
            payload = {user_id: @user.id}
            #create token
            token = encode(payload)
            render json: {
                error: false,
                message: "signed in",
                token: token
            }, status: :accepted

        else
            # bad post fetch request or wrong password - give error
            #localstorage is empty!!
            render json:{
                error:true,
                error_message: "Incorrect username or password"
            } , status: :unauthorized
        end


    end
end
