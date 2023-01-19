class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :course_session

    def belongs_to_user?(user)
        self.user_id == user.id
    end
end
