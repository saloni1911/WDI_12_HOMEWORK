# https://gist.github.com/kasun-maldeni/87b2350944370397225b4bfdc8c5cef9/
# Allergies

# An allergy test produces a single numeric score which contains the information about all the allergies the person has (that they were tested for).

# The list of items (and their value) that were tested are:

# eggs (1)
# peanuts (2)
# shellfish (4)
# strawberries (8)
# tomatoes (16)
# chocolate (32)
# pollen (64)
# cats (128)
# So if Tom is allergic to peanuts and chocolate, he gets a score of 34.

# Write a program that, given a person's score can tell them

# a) whether or not they're allergic to a given item, and b) the full list of allergies.

# allergies = Allergies.new(34)
# allergies.allergic_to?('chocolate')
# => true
# allergies.allergic_to?('cats')
# => false
# allergies.list
# => ['peanuts', 'chocolate']

require 'pry'


class Allergies

	attr_accessor :score, :item

	@@arr = [];

	@@items = {
	'eggs' => 1,
	'peanuts' => 2,
	'shellfish' => 4,
	'strawberries' => 8,
	'tomatoes' => 16,
	'chocolate' => 32,
	'pollen' => 64,
	'cats' => 128
	}

	def initialize(score)
		@score = score
		@item = item
	end


	def allergy_to?(item)
		@@items.each do |key, value|
  		if key == item
  			print "True"
  		else 
  			print "False"
  		end
		end

	end


	def list
		puts @score
		@@items.each do |key, value|

		if @score <= value
			@@arr.push(key)
		end
		@score - value
	end

	puts @@arr

	end


end

binding.pry

