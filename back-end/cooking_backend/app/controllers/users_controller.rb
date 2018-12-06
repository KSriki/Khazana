class UsersController < ApplicationController

    def profile
        token = request.headers["Authorization"].split(' ')[1]
        payload = decode(token)
        user = User.find(payload["user_id"])
        myrecipes = Recipe.where(user_id: user.id)
        render json: {user: UserSerializer.new(user), myrecipes: myrecipes}, status: :accepted
    end

    # Sign Up then sign in
def create
  @user = User.create(user_params)
  
  if @user.valid?
    myrecipes = Recipe.where(user_id: @user.id)
    payload = {user_id: @user.id}
    #create token
    token = encode(payload)
    render json: {
        error: false,
        message: "signed in",
        token: token,
        user_info: {
            username: @user.username,
            email: @user.email
        }
    }, status: :created

  else
    render json: { error: 'failed to create user' }, status: :not_acceptable
  end
end


private

def user_params
  params.require(:user).permit(:username, :email, :password)
end
end
