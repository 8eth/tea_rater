class TeaSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :ingredients, :origin, :shop
end
