class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bio, :picture

  has_many :reviews
  # has_many :teas, through: :reviews  
end
