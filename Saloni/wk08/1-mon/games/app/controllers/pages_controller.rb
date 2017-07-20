class PagesController < ApplicationController

	def magic
		render :magic
	end

 def magic_answer
 	@question = params[:question]
 	render :magic_answer
 end

	def secret_answer
		@num = params[:num]
		@random = Random.rand(11);
		if (@num.to_i == @random);
			@answer = "You win"
		else 
			@answer = "You lose"
		end
		render :secret_answer
	end

	def rock_answer
		@throw1 = params[:throw1]
		@throw2 = params[:throw2]
		if (@throw1 == "scissors" && @throw2 == "paper")
			@answer = "Player 1 win and Player 2 lose"
		elsif (@throw1 == "paper" && @throw2 == "rock")
			@answer = "Player 1 win and Player 2 lose"
		elsif (@throw1 == "rock" && @throw2 == "scissors")
			@answer = "Player 1 win and Player 2 lose"
		elsif (@throw1 == "paper" && @throw2 == "scissors")
			@answer = "Player 2 win and Player 1 lose"
		elsif (@throw1 == "rock" && @throw2 == "paper")
			@answer = "Player 2 win and Player 1 lose"
		elsif (@throw1 == "scissors" && @throw2 == "rock")
			@answer = "Player 2 win and Player 1 lose"
		else
			@answer = "Draw"
		end
		render :rock_answer
	end



end