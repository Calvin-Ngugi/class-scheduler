class ApplicationController < ActionController::API
    include ActionController::Cookies
    before_action :authenticate
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
    
    private

    def authenticate
        return render json: {errors: ["You need to be logged in to continue"]}, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity_response(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end
    
    def current_user
        @current_user ||= User.find_by(id: session[:user_id])
    end
end
