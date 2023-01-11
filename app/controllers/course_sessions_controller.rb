class CourseSessionsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record

    def index
        render json: CourseSession.all, status: :ok
    end

    def show
        course_session = CourseSession.find_by(id: params[:id])
        render json: course_session, status: :ok
    end

    def create
        if current_user.role == "instructor"
            course_session = CourseSession.create(session_params)
            render json: course_session, status: :created
        else
            render json: {errors: ["You are not authorized for this"]}, status: :unauthorized
        end
    end

    def update
        if current_user.role == "instructor"    
            course_session = CourseSession.find_by(id: params[:id])
            course_session.update!(session_params)
            render json: course_session, status: :updated
        else
            render json: {errors: ["You are not authorized for this"]}, status: :unauthorized
        end
    end

    def destroy
        if current_user.role == "instructor"
            course_session = CourseSession.find_by(id: params[:id])
            course_session.destroy
            head :no_content
        else    
            render json: {errors: ["You are not authorized for this"]}, status: :unauthorized
        end
    end

    private
    def rescue_from_not_found_record
        render json: {error: "Review not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def session_params
        params.permit(:session_name, :description, :date, :time, :invitation_link, :user_id, :course_id)
    end

    def current_user
        user = User.find_by(id: params[:user_id])
    end
end
