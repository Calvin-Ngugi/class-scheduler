class Course < ApplicationRecord
    has_many :sessions
    has_many :announcements
    has_many :comments, through: :sessions
end
