require 'pg'

db_conn = PG.connect(:dbname => 'movies_db', :host => 'localhost')

file = File.new("data.csv", "a+")

file.each do |line|
  movie = line.split(",")
  name = player[0].gsub("'","")
  release_date = player[1]
  para = player[2]
  poster = player[3]

  sql  = "INSERT INTO players (name, age, team, games, points)"
  sql += "VALUES ( '#{name}', '#{age}', '#{team}', '#{games_played}', '#{points}');"

  db_conn.exec(sql)

end

file.close

db_conn.close