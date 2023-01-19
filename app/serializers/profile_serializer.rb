class ProfileSerializer < ActiveModel::Serializer
  attributes :id, :First_name, :Last_name, :gender, :bio, :user_id, :profile_img
  has_one :user
end
