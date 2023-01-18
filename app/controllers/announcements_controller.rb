class AnnouncementsController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_not_found_record
    rescue_from ActiveRecord::RecordInvalid, with:  :rescue_from_invalid_record
    before_action :require_admin, except: [:index, :show]
    before_action :find_announcement, only: [:show, :update, :destroy]

    def index
        render json: Announcement.all
    end

    def show
        render json: @announcement, status: :ok
    end

    def create
        announcement = Announcement.create!(announcement_params)
        if announcement.save
            redirect_to @announcement, notice: 'Announcement was successfully created.'
        end
        render json: announcement, status: :created
    end

    def update
        @announcement.update!(announcement_params)
        render json: @announcement,  status: :updated

    def destroy
        @announcement.destroy
        head :no_content
    end
    
    private

    def announcement_params
        params.permit(:course_id, :title, :content)
    end

    def find_announcement
        @announcement = Announcement.find(params[:id])
    end

    def rescue_from_not_found_record
        render json: {error: "Review not found"}, status: :not_found 
    end

    def rescue_from_invalid_record(e)
        render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity 
    end

    def require_admin
        unless current_user.try(:instructor?) || current_user.role == "instructor"
            render json: {error: "You are not authorized to perform this action."}, status: :unauthorized
        end
    end
end
