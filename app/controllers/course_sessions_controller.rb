class CourseSessionsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
    before_action :require_admin, except: [:index, :show]

    def index
        render json: CourseSession.all, status: :ok
    end
    
    def show
        course_session = CourseSession.find_by(id: params[:id])
        render json: course_session, status: :ok
    end

    def create
        course_session = CourseSession.create(session_params)
        render json: course_session, status: :created
    end

    def update
        course_session = CourseSession.find_by(id: params[:id])
        course_session.update!(session_params)
        render json: course_session, status: :updated
    end

    def destroy
        course_session = CourseSession.find_by(id: params[:id])
        course_session.destroy
        head :no_content
    end

    private
    def rescue_from_not_found_record
        render json: {error: "Review not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def session_params
        params.permit(:session_name, :description, :date, :time, :invitation_link, :course_id)
    end

    def require_admin
        unless current_user.try(:instructor?) || current_user.role == "instructor"
            render json: {error: "You are not authorized to perform this action."}, status: :unauthorized
        end
    end
end
