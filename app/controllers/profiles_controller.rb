class ProfilesController < ApplicationController
     
     def index
        render json: Profile.all, status: :ok
     end

     def show
        profile = find_profile
        render json: profile, status: :ok 
     end
     
     def create
        profile = Profile.create!(profile_params);
        render json: profile, status: :created
     end

     def update
        profile = find_profile
        profile.update!(profile_params)
        render json: profile
     end

     def destroy
        profile = find_profile
        profile.destroy
        head :no_content
     end

    private

    def find_profile
      Profile.find_by(id: params[:id])
    end

    def profile_params
        params.permit(:First_name, :Last_name, :gender, :bio, :profile_img, :user_id)
    end

    def user
      @user ||= User.find(params[:user_id])
    end
end
