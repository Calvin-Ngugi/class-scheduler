class AnnouncementsController < ApplicationController
    before_action :find_announcement, only: [:show, :update, :destroy]
    before_action :authenticate_user! ,except: [:show,:index]
    #require './path/to/authfile'

    def index
        render json: Announcement.all
    end

    def show
        render json: @announcement
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
        render json: @announcement, status: :ok
    end

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
end