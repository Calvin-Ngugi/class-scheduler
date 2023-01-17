class SingleCourseSerializer < ActiveModel::Serializer
  attributes :id, :course_name, :description, :course_sessions
  has_many :course_sessions, serializer: CourseSessionSerializer, dependent: :destroy
end
