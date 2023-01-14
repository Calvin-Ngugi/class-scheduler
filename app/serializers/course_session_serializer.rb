class CourseSessionSerializer < ActiveModel::Serializer
  attributes :id, :session_name, :brief_desc, :date
end
