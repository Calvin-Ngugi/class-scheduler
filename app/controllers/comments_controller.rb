class CommentsController < ApplicationController
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
  rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
  before_action :require_admin, only: [:destroy]
  
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

      def like
        comment = Comment.find(params[:id])
        if comment.liked_by?(current_user)
            render json: { error: "You have already liked this comment" }
        else
            comment.increment!(:likes)
            render json: { likes: comment.likes }
        end
      end

      def status
        comment = Comment.find(params[:id])
        render json: { likes: comment.likes, isLiked: comment.liked_by?(current_user)}
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
          @course_session ||= CourseSession.find(params[:course_session_id])
      end

      def require_admin
        unless current_user.try(:instructor?) || current_user.role == "instructor"
            render json: {error: "You are not authorized to perform this action."}, status: :unauthorized
        end
    end
    
  end