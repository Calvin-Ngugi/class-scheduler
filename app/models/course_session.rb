class CourseSession < ApplicationRecord
    belongs_to :course, dependent: :destroy
    has_many :comments
    validates :description, presence: true, length: {minimum: 10}

    def brief_desc
        description.split[0..15].join(" ")
    end
end
