     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'

get '/' do
  erb :index
end


# http://localhost:4567/list?s=jaws&apikey=2f6435d9
get '/list' do
	movie_name = params[:s]
	result = HTTParty.get("http://www.omdbapi.com/?s=#{movie_name}&apikey=2f6435d9").parsed_response
	@whole_list = result['Search']

erb :list
end

# http://localhost:4567/list?t=jaws&apikey=2f6435d9
get '/details/:t' do
	movie_clicked = params[:t]
	result = HTTParty.get("http://www.omdbapi.com/?t=#{movie_clicked}&apikey=2f6435d9").parsed_response
	@movie_detail = result

erb :details
end



