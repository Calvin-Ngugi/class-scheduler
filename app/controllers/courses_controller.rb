class CoursesController < ApplicationController
    before_action :authorize, except: [:index]
    #index create update delete

     def index
        user = check_user
        render json: Course.all, status: :created
     end

     def create
        user = check_user
        course = Course.create(course_params);
        if course.valid?
            render json: course, status: :created
        else
            render json: {errors: course.errors.full_messages} , status: :unprocessable_entity
        end
     end

     def update
        course = find_course
        course.update!(course_params)
        render json: course, status: :updated
     end

     def destroy
        user = check_user
        course = find_course
        if course
          course.delete
          head :no_content
        else
          render json: {errors: ["Not authorized"]}, status: :unauthorized
        end
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

    def course_params
        params.permit(:name,:description)
    end
end

