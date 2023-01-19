class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :course_session
    has_many :likes, dependent: :destroy, class_name: "Like"
    has_many :liked_users, through: :likes, source: :user
    attribute :likes, :integer, default: 0
    validates_uniqueness_of :liked_users, scope: :id, message: "You have already liked this comment"

    def belongs_to_user?(user)
        self.user_id == user.id
    end

    def like
        increment!(:likes)
    end

    def liked_by?(user)
        likes.exists?(user: user)
    end
end
