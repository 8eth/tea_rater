class TeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :ingredients, :origin, :shop

  has_many :reviews
  has_many :users
end
