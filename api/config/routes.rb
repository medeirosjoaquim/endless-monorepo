Rails.application.routes.draw do
  match '/' => 'podcasts#index', via: :get
  match '/' => 'podcasts#fetch_rss', via: :post
  match '/list' => 'podcasts#list', via: :get
  match '/podcast/url' => 'podcasts#podcast_by_url', via: :post
  get '/podcast/:id', to: 'podcasts#show'
  match 'test' => 'podcasts#test', via: :post
end
