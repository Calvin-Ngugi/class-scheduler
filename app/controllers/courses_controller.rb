class CoursesController < ApplicationController
    before_action :authorize, except: [:index]
    #index create update delete
    #only login users is admin all allow to add new course
     def index
     end

     def create
        course = Course.create(course_params);
        if course.valid?
            render json: course, status: :created
        else
            render json: {errors: course.errors.full_messages} , status: :unprocessable_entity
        end
     end

     def update
     end
     
     def destroy
     end

    private
    def authorize
        return render json: {errors: ["Not authorized"]}, status: :unauthorized unless session.include? :user_id
    end

    def check_user
      User.find_by(id: session[:user_id])
    end

    def course_params
        params.permit(:name,:description)
    end
end
end
