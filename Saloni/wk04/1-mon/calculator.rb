# https://gist.github.com/epoch/c860e4c5126482502fc8
# Explanation

# You will be building a calculator. A calculator can perform multiple arithmetic operations. Your function should allow the user to choose which operation is expected, enter in the values to perform the operation on, and ultimately view the result.
# Specification:

# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# This process should continue until the user selects a quit option from the menu
# Phase 1

# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2

# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
# Phase 3

# User should be given a menu of Calculator functionality
# User should be able to choose intended functionality
# Optional Extensions

# Does your calculator allows addition of more then 2 numbers in one go? eg: 2 + 3 + 4

# input1 = gets.chomp.to_i
# input2 = gets.chomp.to_i

puts 'Choose one of the following calculator functionality'
all = '1. addition' , '2. subtraction' , '3. multiplication' , '4. division' ,
'5. exponent' , '6. square_root', '7. quit'
puts all
print 'option: '
option = gets.chomp


print 'input1: '
input1 = gets.chomp.to_i
print 'input2: ' 
input2 = gets.chomp.to_i


def addition(input1, input2)
	print "The sum of #{input1} and #{input2} is #{input1 + input2} \n"
end

def subtraction(input1, input2)
	print "The difference of #{input1} and #{input2} is #{input1 - input2} \n"
end

def multiplication(input1, input2)
	print "The product of #{input1} and #{input2} is #{input1 * input2} \n"
end

def division(input1, input2)
	print "The quotient of #{input1} and #{input2} is #{input1/input2} \n"
end

def exponent(input1, input2)
	print "The power of #{input1} to #{input2} is #{input1 ** input2} \n"
end

def square_root(input1)
	print "The square_root of #{input1} is #{input1 ** 0.5} \n"
end

# all.each do |element|
# 	selection = element.split.last
# 	if option == selection 
# 		"#{selection}(input1, input2)"
# 	end
# end



if option == 'addition'
	addition(input1, input2)
elsif option == 'subtraction'
	subtraction(input1, input2)
elsif option == 'multiplication'
	multiplication(input1, input2)
elsif option == 'division'
	division(input1, input2)
elsif option == 'exponent'
	exponent(input1, input2)
elsif option == 'square_root'
	square_root(input1)
elsif option == 'quit'
	puts "thanks"
end



