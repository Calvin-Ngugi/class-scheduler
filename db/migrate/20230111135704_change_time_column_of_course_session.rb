class ChangeTimeColumnOfCourseSession < ActiveRecord::Migration[7.0]
  def change
    change_column(:course_sessions, :time, :time)
  end
end
