class CourseSession < ApplicationRecord
    belongs_to :course
    belongs_to :user, through: :course
    has_many :comments
end
