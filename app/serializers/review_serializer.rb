class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :taste, :rating, :recommend, :user
  has_one :tea
  has_one :user
end
