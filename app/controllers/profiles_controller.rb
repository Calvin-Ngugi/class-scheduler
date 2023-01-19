class ProfilesController < ApplicationController
     before_action :authorize, except: [:index, :show]

     def show
        profile = find_profile
        render json: profile, status: :ok
     end

     def create
        profile = Profile.create(profile_params);
        if profile.valid?
            render json: profile, status: :created
        else
            render json: {errors: profile.errors.full_messages} , status: :unprocessable_entity
        end
     end

     def update
        profile = find_profile
        profile.update!(profile_params)
        render json: profile, status: :updated
     end

    private
    def authorize
        return render json: {errors: ["Profile not Found"]}, status: :unauthorized unless session.include? :user_id
    end

    def find_profile
      Profile.find_by(id: params[:id])
    end

    def profile_params
        params.permit(:First_name,:Last_name,:gender,:bio,:profile_img)
    end
end


end
