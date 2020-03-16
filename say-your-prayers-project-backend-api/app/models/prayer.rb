class Prayer < ApplicationRecord
  validates :title, uniqueness: { case_sensitive: false }
  belongs_to :user
end
