class ChangeTimeColumnOfCourseSessionToString < ActiveRecord::Migration[7.0]
  def change
    change_column(:course_sessions, :time, :string)
  end
end
