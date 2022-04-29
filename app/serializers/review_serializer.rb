class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :taste, :rating, :recommend, :user, :tea

  has_one :tea
  has_one :user
end
