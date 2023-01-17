class CommentsSerializer < ActiveModel::Serializer
  attributes :id, :content, :likes
  has_one :user
  belongs_to :course_session
end
