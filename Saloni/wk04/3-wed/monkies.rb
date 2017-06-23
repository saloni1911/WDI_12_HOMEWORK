# https://gist.github.com/epoch/e9bf9c429fbcb2888c87cc7548364c99#file-week4_ruby_objects_class-md

# Create a Monkey class in monkey.rb, which has the following attributes:

# name - a string, which should be determined by some input
# species - a string, which should be determined by some input
# foods_eaten - an array, which should be initialized as an empty array
# And the following methods:

# eat(food) - adds a food (a string) to the list of foods eaten
# introduce - introduces self, with name, species, and what it's eaten
# Create another file app.rb to use test out the Monkey class
# you should be able to call all the following methods

# adam = Monkey.new("Adam", "Spider Monkey")
# adam.eat('fruit salad')
# adam.eat('banana milkshake')
# adam.introduce # "Hi my name is Adam. I am a Spider Monkey. I had fruit salad and banana milkshake for brunch"

require 'pry'

class Monkey

	def initialize(monkey_name, monkey_species)

		@name = monkey_name
		@species = monkey_species
		@foods_eaten = []

	end

	def eat(food)
	 @foods_eaten.push(food)
		
	end

	def introduce
		print "Hi, my name is #{@name}. I am a #{@species}. I had #{@foods_eaten.join(" and ")} for brunch."
	end

end

puts monkey1 = Monkey.new("Adam", "Spider Monkey")
puts monkey1.eat("banana")
puts monkey1.eat("apple")
puts monkey1.introduce

binding.pry


