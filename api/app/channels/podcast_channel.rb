class PodcastChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'Podcast'
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
