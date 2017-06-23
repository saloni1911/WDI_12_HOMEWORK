# https://gist.github.com/epoch/b1414952f7bd1b21945ae34b7310826d
# in groups of

# write a program in ruby that randomly organize a list of things into groups

# prompts the user for a list of things and store them inside an array
# prompts the user for a group size
# randomly assign things into groups with size given
# print out the groups in whatever way you like
# enter a list:
# bart,homer,lisa,maggie
# enter group size:
# 2

# [['bart','lisa'],['maggie','homer']]
# if there are left overs with the given group size just assign them to the last group

# enter a list:
# bart,homer,lisa,maggie,ned
# enter group size:
# 2

# [['bart','lisa'],['ned','homer','maggie']]

#require 'pry'

print "Enter a list of items: "
list = gets.chomp.split(",")

# print list

print "Enter group size: "
input2 = gets.chomp.to_i

# print input2
newarray = []

loop do

	if list.length >= (2 * input2)
		newarray.push(list.slice!(0, input2))
		# print list
		# print newarray
	end

break if list.length <= (2 * input2)
end

newarray.push(list)

print newarray

#binding.pry


