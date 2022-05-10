class User < ApplicationRecord
    has_secure_password
    has_many :reviews, dependent: :destroy
    has_many :teas, through: :reviews

    validates :username, presence: true, uniqueness: true
    validates :password, presence: true, on: :create
end
