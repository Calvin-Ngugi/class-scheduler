class Course < ApplicationRecord
    has_many :course_sessions
    has_many :comments, through: :course_sessions
end
