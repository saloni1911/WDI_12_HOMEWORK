require 'pry'

class Animal
	
	@@shelterani = []
	attr_accessor :aname, :age, :gender, :species 

# def self.addAnimal
# 		prompt "What is the animal name?"
			#aname = gets.chomp
# 		age = prompt "What is the age of animal?"
# 		gender = prompt "What is the gender of animal?"
# 		species = prompt "What is the species of animal?"
# 		toys = prompt "What are the toys of animal?"
# 		@@shelterani = Animal.new(aname, age, gender, species)
# 	end

	def self.all_instances
		@@shelterani
	end

	def self.length
		@@shelterani.length
	end

	def initialize(aname, age, gender, species)
		@name = aname
		@age = age
		@gender = gender
		@species = species
		@toys = []
		@@shelterani << self
	end

	def ani_toys(toy)
		@toys.push(toy)
	end

	def get_species
		@species
	end
	
end

Animal.all_instances
Animal.length

binding.pry






