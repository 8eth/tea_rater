class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :taste, :rating, :recommend
  has_one :tea
  has_one :user
end
