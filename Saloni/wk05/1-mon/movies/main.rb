     
require 'sinatra'
require 'sinatra/reloader'
require 'pry'
require 'httparty'
require 'pg'

# db_conn = PG.connect(:dbname => 'movies_db', :host => 'localhost')
# 	title = @movie_detail["Title"]
#   release_date = @movie_detail["Released"]
#   summary = @movie_detail["Plot"]
#   poster = @movie_detail["Poster"]

#  	sql  = "INSERT INTO movies (title, release_date, summary, poster)"
#   sql += "VALUES ( '#{title}', '#{release_date}', '#{summary}', '#{poster}');"

# db_conn.exec(sql)

def run_sql(sql) 
	conn = PG.connect(:dbname => 'movies_db')
	result = conn.exec(sql)
	conn.close
	result
end


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

	sql  = "INSERT INTO movies(title, release_date, summary, poster) "
	sql += "VALUES ( '#{@movie_detail["Title"]}', '#{@movie_detail["Released"]}', '#{@movie_detail["Plot"]}', '#{@movie_detail["Poster"]}');"


	return sql
	run_sql(sql)

	erb :details
end



