class Portfolio < ApplicationRecord
  validates_presence_of :title, :main_image, :thumb_image

  # following is for demonstration purposes - not best practice
  def self.angular
    where(subtitle: "Angular")
  end

  scope :ruby_on_rails_only, -> { where(subtitle: 'Ruby on Rails') }
end
