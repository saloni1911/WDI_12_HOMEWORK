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

require 'pry'

cards = {
	"card1" => {
	:name => "Pikachu",
	:attack => 40,
	},
	"card2" => {
	:name => "Rattata",
	:attack => 20,
	},
	"card3" => {
	:name => "Pidgeot	",
	:attack => 60,
	},
	"card4" => {
	:name => "Alakazam",
	:attack => 80,
	},
	"card5" => {
	:name => "Butterfree",
	:attack => 30,
	},
	"card6" => {
	:name => "Gengar",
	:attack => 70,
	},
	"card7" => {
	:name => "Moltres",
	:attack => 100,
	},
	"card8" => {
	:name => "Vulpix",
	:attack => 40,
	},
	"card9" => {
	:name => "Blastoise",
	:attack => 80,
	},
	"card10" => {
	:name => "Hitmonchan",
	:attack => 50,
	},
}

puts reversed_cards = Hash[cards.to_a.reverse]

one = []
two = []
three = []
four = []

one.push(reversed_cards["card10"],reversed_cards["card9"],reversed_cards["card8"],reversed_cards["card7"])
binding.pry











