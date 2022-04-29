class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :picture

end
