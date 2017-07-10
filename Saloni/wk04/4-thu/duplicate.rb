require 'pry'

class Animal
	
	@@shelterani = []
	attr_accessor :aname, :age, :gender, :species, :toys

# def self.addAnimal
# 		prompt "What is the animal name?"
			#aname = gets.chomp
# 		age = prompt "What is the age of animal?"
# 		gender = prompt "What is the gender of animal?"
# 		species = prompt "What is the species of animal?"
# 		toys = prompt "What are the toys of animal?"
# 		@@shelterani = Animal.new(aname, age, gender, species)
# 	end

	def self.all
		@@shelterani
	end

	def self.length
		@@shelterani.length
	end

	def initialize(aname, age, gender, species, toys)
		@name = aname
		@age = age
		@gender = gender
		@species = species
		@toys = []
		@@shelterani.push self
		# @@shelterani << self
	end

	def ani_toys(toy)
		@toys.push(toy)
	end

	def get_species
		@species
	end
	
end


	print "What is the animal name?"
	aname = gets.chomp
	print "What is the age of animal?"
	age = gets.chomp.to_i
	print "What is the gender of animal?"
	gender = gets.chomp
	print "What is the species of animal?"
	species = gets.chomp
	print "What are the toys of animal?"
	toys = gets.chomp

animal = Animal.new(aname, age, gender, species, toys)
# puts self.all_instances
# puts self.length



# print Animal.all
# puts Animal.length

# binding.pry

print Animal.all
puts Animal.length




