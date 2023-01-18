class AddCourseIdToCourseSessions < ActiveRecord::Migration[7.0]
  def change
    add_column :course_sessions, :course_id, :integer
  end
end
