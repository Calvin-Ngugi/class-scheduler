class CommentsController < ApplicationController
    before_action :set_comment, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!
  
    def create
      @comment = current_user.comments.build(comment_params)
      if @comment.save
        redirect_to @comment, notice: 'Comment was successfully created.'
      else
        render :new
      end
    end
  
    def update
      if @comment.update(comment_params)
        redirect_to @comment, notice: 'Comment was successfully updated.'
      else
        render :edit
      end
    end
  
    def destroy
      if current_user == @comment.user
        @comment.destroy
        redirect_to comments_url, notice: 'Comment was successfully destroyed.'
      else
        redirect_to comments_url, notice: 'You are not authorized to delete this comment.'
      end
    end
  
    def like
      @comment = Comment.find(params[:id])
      @comment.liked_by current_user
      redirect_to @comment
    end
  
    private
  
    def set_comment
      @comment = Comment.find(params[:id])
    end
  
    def comment_params
      params.require(:comment).permit(:body)
    end
  end
  