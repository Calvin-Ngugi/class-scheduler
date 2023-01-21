class CourseSessionSerializer < ActiveModel::Serializer
  attributes :id, :session_name, :brief_desc, :date, :course
  belongs_to :course, dependent: :destroy
end
