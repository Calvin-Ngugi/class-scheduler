class Like < ApplicationRecord
    belongs_to :user
    belongs_to :comment, counter_cache: true

    def self.user_liked(user_id,comment_id)
        Like.exists?(user_id: user_id, comment_id: comment_id)
    end
end
