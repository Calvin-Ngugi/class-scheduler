class SingleCourseSessionSerializer < ActiveModel::Serializer
  attributes :id :session_name, :description, :date, :time, :invitation_link, :comments
  has_many :comments, serializer: CommentsSerializer, dependent: :destroy
end
