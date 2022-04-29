class TeaSerializer < ActiveModel::Serializer
  has_many :reviews
  attributes :id, :name, :image, :description, :ingredients, :origin, :shop
end
