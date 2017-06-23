# Name	Attack
# Pikachu	40
# Rattata	20
# Pidgeot	60
# Alakazam	80
# Butterfree	30
# Gengar	70
# Moltres	100
# Vulpix	40
# Blastoise	80
# Hitmonchan	50

# require 'pry'

# cards = {
# 	"card1" => {
# 	:name => "Pikachu",
# 	:attack => 40,
# 	},
# 	"card2" => {
# 	:name => "Rattata",
# 	:attack => 20,
# 	},
# 	"card3" => {
# 	:name => "Pidgeot	",
# 	:attack => 60,
# 	},
# 	"card4" => {
# 	:name => "Alakazam",
# 	:attack => 80,
# 	},
# 	"card5" => {
# 	:name => "Butterfree",
# 	:attack => 30,
# 	},
# 	"card6" => {
# 	:name => "Gengar",
# 	:attack => 70,
# 	},
# 	"card7" => {
# 	:name => "Moltres",
# 	:attack => 100,
# 	},
# 	"card8" => {
# 	:name => "Vulpix",
# 	:attack => 40,
# 	},
# 	"card9" => {
# 	:name => "Blastoise",
# 	:attack => 80,
# 	},
# 	"card10" => {
# 	:name => "Hitmonchan",
# 	:attack => 50,
# 	},
# }

# puts reversed_cards = Hash[cards.to_a.reverse]

# one = []
# two = []
# three = []
# four = []

# one.push(reversed_cards["card10"],reversed_cards["card9"],reversed_cards["card8"],reversed_cards["card7"])
# binding.pry

require 'pry'

cards = [
	{
	:name => "Pikachu",
	:attack => 40,
	},
	{
	:name => "Rattata",
	:attack => 20,
	},
	{
	:name => "Pidgeot",
	:attack => 60,
	},
	{
	:name => "Alakazam",
	:attack => 80,
	},
	{
	:name => "Butterfree",
	:attack => 30,
	},
	{
	:name => "Gengar",
	:attack => 70,
	},
	{
	:name => "Moltres",
	:attack => 100,
	},
	{
	:name => "Vulpix",
	:attack => 40,
	},
	{
	:name => "Blastoise",
	:attack => 80,
	},
	{
	:name => "Hitmonchan",
	:attack => 50,
	},
]
# cards
#cards[0]
#cards[0][:name]
reversed_cards = cards.reverse

groups = reversed_cards.each_slice(3).to_a


#players = { alfred: groups[0], peter: groups[1] }

players = { alfred: groups.shift, peter: groups.shift }

# players = { 
# 	:alfred => groups.shift,
# 	:peter => groups.shift 
# }

#print players

if rand(0..1) == 0
	players[:alfred].push(groups.shift).flatten!
	players[:peter].push(groups.shift).flatten!
else
	players[:peter].push(groups.shift).flatten!
	players[:alfred].push(groups.shift).flatten!
end

print players[:peter]
print players[:peter].count
print players[:alfred]
print players[:alfred].count

# to make it DRY
winner = 0
if rand(0..1) == 0
	winner = :alfred
else
	winner = :peter
end

#or
winner = if rand(0..1) == 0
	:alfred
else
	:peter
end

#or 
winner = if rand(0..1) == 0 ? :alfred : :peter
looser = winner == :alfred ? :peter : :alfred

players[winner].push(groups.shift).flatten!

binding.pry
















