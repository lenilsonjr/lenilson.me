#!/usr/bin/env ruby

def sentence(array)
  default_words_connector     = ", "
  default_two_words_connector = " and "
  default_last_word_connector = ", and "

  case array.length
    when 0
      ""
    when 1
      array[0].to_s.dup
    when 2
      "#{array[0]}#{default_two_words_connector}#{array[1]}"
    else
      "#{array[0...-1].join(default_words_connector)}#{default_last_word_connector}#{array[-1]}"
  end
end

require 'dotenv'
require 'net/https'
require 'open-uri'
require 'active_support/core_ext/hash'
require 'json'
require 'nokogiri'
require 'wikipedia'

Dotenv.load('now.env')
data = Hash.new

# Last.fm
fmkey = ENV['LASTFM_KEY']
fmuser = ENV['LASTFM_USER']

url = URI.parse("http://ws.audioscrobbler.com/2.0/?method=user.getweeklyartistchart&user=#{fmuser}&api_key=#{fmkey}&format=json")
req = Net::HTTP::Get.new(url.to_s)
res = Net::HTTP.start(url.host, url.port) {|http|
  http.request(req)
}
artists_unparsed = JSON.parse(res.body)['weeklyartistchart']['artist'].first(3)
artists = []

artists_unparsed.each do |artist|
  artists.push(artist['name'])
end

data[:listening] = sentence(artists)
# End of Last.fm

# Goodreads
grkey = ENV['GOODREADS_KEY']
gruser = ENV['GOODREADS_USER']

url = URI.parse("https://www.goodreads.com/review/list?key=#{grkey}&id=#{gruser}&v=2&shelf=currently-reading").read
req = Hash.from_xml(url)["GoodreadsResponse"]

books = []

if req['reviews']['review'].is_a?(Array)
  req['reviews']['review'].each do |book|
    book = book['book']['title_without_series']
    books.push(book.split(':').first)
  end
else
  book = req['reviews']['review']['book']['title_without_series']
  books.push(book.split(':').first)
end

data[:reading] = sentence(books)
# End of Goodreads

# WIP
wipuser = ENV['WIP_USER']
wiptoken = ENV['WIP_KEY']

query = { query: "{
 	user(id: #{wipuser}) {
    products {
      url
      name
      updated_at
    }
  }
}" }

url = URI.parse("https://wip.chat/graphql")
req = Net::HTTP::Post.new(url.to_s)
req['Content-Type'] = 'application/json'
req['Authorization'] = "bearer #{wiptoken}"
req.body = query.to_json
res = Net::HTTP.start(url.host, url.port, use_ssl: true) {|http|
  http.request(req)
}
products = JSON.parse(res.body)['data']['user']['products']

data[:building] = Array.new

products.each do |product|
  data[:building].push([product['name'], product['url']]) if Date.today - 30 <= Date.parse(product['updated_at'])
end
# End of WIP

# Location (via NomadList)
url = URI.parse("https://nomadlist.com/@#{ENV['NOMADLISTUSER']}.json")
req = Net::HTTP::Get.new(url.to_s)
res = Net::HTTP.start(url.host, url.port, use_ssl: true) {|http|
  http.request(req)
}
location = JSON.parse(res.body)['location']

Wikipedia.configure {
  domain 'en.wikipedia.org'
  path   'w/api.php'
}
wikipedia = Wikipedia.find(location['now']['city'])

data[:location] = Hash.new
data[:location][:html] = "<a target='_blank' href='#{wikipedia.fullurl}'>#{location['now']['city']}, #{location['now']['country']}</a> #{location['now']['country_code'].upcase.tr('A-Z', "\u{1F1E6}-\u{1F1FF}")}"
data[:location][:image] = "url('#{wikipedia.image_urls.first}')"

data[:next_location] = Hash.new
data[:next_location][:html] = "#{location['next']['city']}, #{location['next']['country']} #{location['next']['country_code'].upcase.tr('A-Z', "\u{1F1E6}-\u{1F1FF}")} in #{(Date.parse(location['next']['date_start']) - Date.today).to_i} days"
# End of location

File.open(ENV['DATAJSON'], 'w') { |file| file.write(data.to_json) }
