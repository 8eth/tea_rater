class Review < ApplicationRecord
  belongs_to :tea
  belongs_to :user
end
