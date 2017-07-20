class Api::ArticlesController < ApplicationController

	def show
		# sleep 7
		@article = Article.find(params[:id])
		@comments = Comment.where(article_id: params[:id])
		# render json: article
		# render json: article.process_article
		render json: { 
			title: @article.title,
			histogram: @article.process_article,
			comments: @comments
		}

	end



end