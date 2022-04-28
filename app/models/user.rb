class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :teas, through: :reviews

    validates :username, :password, presence: true
    validates :username, uniqueness: true
end
