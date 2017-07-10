require 'pry'

class Animal

	def initialize(aname, age, gender, species, toys)
		@name = aname
		@age = age
		@gender = gender
		@species = species
		@toys = []
		# @@counter += 1
		# @@shelterani << self
	end

	def ani_toys(toy)
		@toys.push(toy)
	end

	def get_species
		@species
	end


# 	class << Animal
#   	def all
#     	ObjectSpace.each_object(self).entries
#   	end
# 	end

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

shelter = []

loop do
	puts 'menu of options:'
	puts '1. Create an animal', '2. Create an client', '3. Display all animals', '4. Display all clients',
	'5. Facilitate client adopts an animal', '6. Facilitate client puts an animal up for adoption', '7. Quit'

	print 'option: '
	option = gets.chomp
		if option == "Create an animal"

		# animal = Animal.new(@aname, @age, @gender, @species, @toys)

		puts "What is the animal name?"
		@aname = gets.chomp

		puts "What is the age of animal?"
		@age = gets.chomp.to_i

		puts "What is the gender of animal?"
		@gender = gets.chomp

		puts "What is the species of animal?"
		@species = gets.chomp

			@toys = []
			loop do
				puts "What are the toys of animal?"
				toy = gets.chomp
			@toys.push(toy)
				puts "Do you want to add more toys? Y or N"
				opt = gets.chomp
				if opt == "Y"
				# puts "What are the toys of animal?"
				toy = gets.chomp
			@toys.push(toy)
				end
				break if opt == "N"
			end
			@toys = animal.ani_toy
		animal = Animal.new(@aname, @age, @gender, @species, @toys)
		shelter.push(animal)

	end
		break if option == 'Quit'
	
end

print shelter

# shelter = []
# puts animal1 = Animal.new('a', 3, 'm', 'gdf')
# puts animal1.ani_toys("rrf")
# puts shelter.push(animal1)
# puts animal2 = Animal.new('b', 4, 'f', 'rrtf')
# puts animal2.ani_toys("you")
# puts shelter.push(animal2)
# print shelter

# def get_name
# 	@name
# end

# Animal.all_instances
# Animal.length

# def create_animals(initialize)
# 	print "variable name: "
# 	variable_name = gets.chomp

	# puts "What is the animal name?"
	# aname = gets.chomp

	# puts "What is the age of animal?"
	# age = gets.chomp.to_i

	# puts "What is the gender of animal?"
	# gender = gets.chomp

	# puts "What is the species of animal?"
	# species = gets.chomp

	# puts "What are the toys of animal?"
	# a

# end

# 	Animal.new()
	
# end

# Animal.all
# shelter = Animal.all

# def get_species
# 		@species
# end

# shelter[0].get_species

# if option == "Create an animal"
# 	print "variable name: "
# 	create_animals


binding.pry

print shelter
shelter[0]
shelter[1]
shelter[0].get_species


























