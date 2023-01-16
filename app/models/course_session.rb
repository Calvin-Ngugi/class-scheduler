class CourseSession < ApplicationRecord
    belongs_to :course
    has_many :comments
    validates :description, presence: true, length: {minimum: 10}

    def brief_desc
        description.split[0..9].join(" ")
    end
end
