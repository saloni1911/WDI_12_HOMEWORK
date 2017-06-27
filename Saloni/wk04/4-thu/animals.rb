require 'pry'

class Animal

	# @@shelterani = [] 
	# attr_accessor :ani_name, :ani_age, :ani_gender, :ani_species

	# def self.all_instances
	# 	@@shelterani
	# end

	# def self.length
	# 	@@shelterani.length
	# end
	#
	# @@counter = 0

	def initialize(aname, age, gender, species)
		@name = aname
		@age = age
		@gender = gender
		@species = species
		@toys = []
		@@counter += 1
		# @@shelterani << self
	end

	def ani_toys(toy)
		@toys.push(toy)
	end

	def get_species
		@species
	end


	class << Animal
  	def all
    	ObjectSpace.each_object(self).entries
  	end
	end

end




# class Client

# 	def initialize(cli_name, cli_children, cli_age)
# 		@clientname = cli_name
# 		@children = cli_children
# 		@clientage = cli_age
# 		@pets = []
# 	end

# 	def client_pets(pet)
# 		@pets.push(pet)
# 	end

# end



# def shelter_ani(animals)
# 	@shelteranimal.push(animals)
# end

# def shelter_client(clients)
# 	@shelterclient = []
# end

puts 'menu of options:'
puts '1. Create an animal', '2. Create an client', '3. Display all animals', '4. Display all clients',
'5. Facilitate client adopts an animal', '6. Facilitate client puts an animal up for adoption'

print 'option: '
	option = gets.chomp

#puts shelter = []
puts animal1 = Animal.new('a', 3, 'm', 'gdf')
puts animal1.ani_toys("rrf")
#puts shelter.push(animal1)
puts animal2 = Animal.new('b', 4, 'f', 'rrtf')
#puts shelter.push(animal2)
#print shelter

# def get_name
# 	@name
# end

# Animal.all_instances
# Animal.length

def create_animals(initialize)
	print "variable name: "
	variable_name = gets.chomp
	puts "What is the animal name?"
	aname = gets.chomp

	puts "What is the age of animal?"
	age = gets.chomp.to_i

	puts "What is the gender of animal?"
	gender = gets.chomp

	puts "What is the species of animal?"
	species = gets.chomp

	puts "What are the toys of animal?"
	a

end

	Animal.new()
	
end

Animal.all
shelter = Animal.all

def get_species
		@species
end

shelter[0].get_species

if option == "Create an animal"
	print "variable name: "
	create_animals


binding.pry




























