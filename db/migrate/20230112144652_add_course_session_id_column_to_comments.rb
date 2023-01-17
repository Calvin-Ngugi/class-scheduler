class AddCourseSessionIdColumnToComments < ActiveRecord::Migration[7.0]
  def change
    add_column :comments, :user_id, :integer
    add_column :comments, :course_session_id, :integer
  end
end
