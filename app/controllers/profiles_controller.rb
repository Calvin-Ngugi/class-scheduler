class ProfilesController < ApplicationController
    before_action :authorize, except: [:index, :show]
    #index create update delete
     def create
        user = check_user
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
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def check_user
      User.find_by(id: session[:user_id])
    end

    def find_course
      Course.find_by(id: params[:id])
    end

    def profile_params
        params.permit(:First_name,:description)
    end
end


end
