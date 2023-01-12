class CoursesController < ApplicationController
    before_action :authorize
    #only login users is admin all allow to add new course
     def create
        course = Course.create(course_params);
        if course.valid?
            render json: course, status: :created
        else
            render json: {errors: course.errors.full_messages} , status: :unprocessable_entity
        end
     end

    private
    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :admin_id
    end

    def check_admin
      User.find_by(id: session[:admin_id])
    end

    def course_params
        params.permit(:name,:description)
    end
end
end
