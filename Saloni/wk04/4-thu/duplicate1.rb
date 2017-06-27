require 'pry'

class Animal

# attr_accessor :name, :age, :gender, :species, :toys

	def initialize(name, age, gender, species)
		# def initialize
		@name = name
		@age = age
		@gender = gender
		@species = species
		@toys = []
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

 #  	def create_animal
	# 	  ani = Animal.new

	# 	  puts "What is the animal name?"
	# 		name = gets.chomp
			

	# 		puts "What is the age of animal?"
	# 		age = gets.chomp.to_i
		 

	# 		puts "What is the gender of animal?"
	# 		gender = gets.chomp


	# 		puts "What is the species of animal?"
	# 		species = gets.chomp
	# #
	# 		puts "What are the toys of your animal?"
	# 		toys = ani.ani_toys(gets.chomp)

	#   	print Animal.all
	# 	end

	  def create_animal
		  ani = Animal.new(@name, @age, @gender, @species)
		  
		  puts "What is the animal name?"
			@name = gets.chomp
			

			puts "What is the age of animal?"
			@age = gets.chomp.to_i
		 

			puts "What is the gender of animal?"
			@gender = gets.chomp


			puts "What is the species of animal?"
			@species = gets.chomp
	
			puts "What are the toys of your animal?"
			@toys = ani.ani_toys(gets.chomp)

	  	print Animal.all

		end

	end
end

loop do
	puts 'menu of options:'
	puts '1. Create an animal', '2. Create an client', '3. Display all animals', '4. Display all clients',
	'5. Facilitate client adopts an animal', '6. Facilitate client puts an animal up for adoption', '7. Quit'

	print 'option: '
	option = gets.chomp

	if option != 'Quit'
	Animal.create_animal
	end

break  if option == 'Quit' || option == 'quit'

end
# # animal1 = Animal.new('a', 3, 'm', 'gdf')
# # puts animal1.ani_toys("rrf")
# # puts animal2 = Animal.new('b', 4, 'f', 'rrtf')

# def create_animals(initialize)
# 	puts "What is the animal name?"
# 	aname = gets.chomp

# 	puts "What is the age of animal?"
# 	age = gets.chomp.to_i

# 	puts "What is the gender of animal?"
# 	gender = gets.chomp

# 	puts "What is the species of animal?"
# 	species = gets.chomp

# 	# puts "What are the toys of animal?"
# 	# a
# 	# Animal.all
# 	# shelter = Animal.all

# end

# # Animal.all
# # shelter = Animal.all

# def get_species
# 		@species
# end

# #  shelter[0].get_species



# puts Animal.all
# shelter = Animal.all

# selected = shelter.select{ |hash| hash.get_species == "rrtf"}


# binding.pry





















