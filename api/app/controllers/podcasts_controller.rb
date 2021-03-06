class PodcastsController < ApplicationController

  require "rss"
  require "open-uri"
  #https://guides.rubyonrails.org/active_record_callbacks.html
  #https://blog.saeloun.com/2019/10/29/rails-6-after-save-commit.html
  #after_save_commit :log_user_saved_to_db

  skip_before_action :verify_authenticity_token, :only => [:index, :fetch_rss, :podcast_by_url]
  
  def index
    @podcasts = Podcast.all
    render json: @podcasts
  end
  
  def fetch_rss
    data = JSON.parse(request.body.read)
    rss_results = []
    url = data['url']
    url.prepend "https://" unless url.start_with?('http://', 'https://')

    podcast = Podcast.where(url: url).take

    if podcast
      render json: {
        title: podcast.title,
        summary: podcast.summary,
        keywords: podcast.keywords,
        category: podcast.category,
        feed: podcast.feed
      }
    else
      begin
        rss = RSS::Parser
            .parse(URI.open(url)
            .read, false)
        
        feed = rss.items
      rescue => e
        puts(e)
        render plain: 'Not Found', :status => '404' and return
      else 
        
        feed.each do |result|
          result = { title: result.title,
            date: result.pubDate,
            link: result.link,
            description: result.description,
            audio_url: result.enclosure.url }
          rss_results.push(result)
        end
          title = rss.channel.title
          summary = rss.channel.itunes_summary
          keywords = rss.channel.itunes_keywords
          category = rss.channel.itunes_category.text
          
          Podcast.new(title: title, 
          summary: summary,
          url: data['url'], 
          category: category, 
          keywords: keywords,
          feed: rss_results
          ).save
          
          render json: {
            title: title,
            summary: summary,
            keywords: keywords,
            category: category,
            feed: rss_results
          } and return
        end
      end
    end
    def list
      @podcasts_list = Podcast.all.map{|p| {id: p.id, title: p.title, summary: p.summary}}
      render json: @podcasts_list  
    end
    def show
      @podcast = Podcast.find(params[:id])
			render json: @podcast
    end
    def podcast_by_url
      data = JSON.parse(request.body.read)
      @podcast = Podcast.where(url: data['url']).take
      if @podcast
        render json: @podcast
      else
        render plain: 'Not Found', :status => '404' and return
      end
    end
  end
