class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: {case_sensitive: true}
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    has_one :profile
    has_many :comments
    has_many :likes, dependent: :destroy
    has_many :liked_comments, through: :likes, source: :comment

    def instructor?
        self.role == "instructor"
    end
end
