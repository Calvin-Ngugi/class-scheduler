class CreateCourseSessions < ActiveRecord::Migration[7.0]
  def change
    create_table :course_sessions do |t|
      t.string :session_name
      t.datetime :time
      t.string :invitation_link
      t.string :description

      t.timestamps
    end
  end
end
