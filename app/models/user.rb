class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: {case_sensitive: true}
    validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }, uniqueness: true
    has_many :announcements, through: :course
    has_many :sessions, through: :course
    has_many :courses
    has_one :profile

    def instructor?
        self.role == "instructor"
    end
end
