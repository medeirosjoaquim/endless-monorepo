class Podcast < ApplicationRecord

  after_commit :broadcast

  private

  def broadcast
    ActionCable.server.broadcast 'Podcast', as_json
  end
end
