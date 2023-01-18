class CoursesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_invalid_record
    before_action :require_admin, except: [:index, :search ,:show]
     def index
         render json: Course.all, status: :ok
     end

     def show
        course = find_course
        render json: course, serializer: SingleCourseSerializer
     end

     def create
        course = Course.create(course_params);
        render json: course, status: :created
     end

     def update
        course = find_course
        course.update!(course_params)
        render json: course, status: :updated
     end

     def search
        @courses = Course.where("course_name like ?", "%#{params[:query]}%")
        render json: @courses
      end

     def destroy
        course = find_course
        course.destroy
        head :no_content
     end

    private
    def rescue_from_not_found_record
        render json: {error: "Course not found"}, status: :not_found
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
    end

    def find_course
      Course.find_by(id: params[:id])
    end

    def course_params
        params.permit(:name,:description)
    end

     def require_admin
        unless current_user.try(:instructor?) || current_user.role == "instructor"
            render json: {error: "You are not authorized to perform this action."}, status: :unauthorized
        end
    end

end

