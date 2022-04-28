class TeaSerializer < ActiveModel::Serializer
  has_many :reviews
  has_many :users
  attributes :id, :name, :image, :description, :ingredients, :origin, :shop
end
