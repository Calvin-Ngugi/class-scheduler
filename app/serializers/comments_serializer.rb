class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes, :user, :course_session
  has_one :user
  belongs_to :course_session
end
