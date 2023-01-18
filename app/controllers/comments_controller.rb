class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
  rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
  
      def index
          render json: Comment.all, status: :ok
      end
  
      def create
        review = course_session.comments.create!(review_params)
        render json: review, status: :created
      end
  
      def update
          review = Comment.find_by(id: params[:id])
          review.update!(review_params)
          render json: review
      end
  
      def destroy 
          review = Comment.find(params[:id])
          review.destroy
          head :no_content
      end
  
      def show
          review = Comment.find_by(id: params[:id])
          render json: review, status: :ok 
      end
  
      private
      def review_params
          params.permit(:content, :like, :course_session_id, :user_id)
      end
  
      def rescue_from_not_found_record
          render json: {error: "Comment not found"}, status: :not_found 
      end
  
      def rescue_from_invalid_record(e)
          render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
      end
  
      def course_session
          @course_session ||= CourseSession.find_by(id: params[:course_sesion_id])
      end
  end