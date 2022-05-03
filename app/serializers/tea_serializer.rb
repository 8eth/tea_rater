class TeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :ingredients, :shop, :origin, :origin_latitude, :origin_longitude

  has_many :reviews
  has_many :users
end
