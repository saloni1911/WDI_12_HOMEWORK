Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # get '/articles', to: 'articles#index'

  resources :articles

  get 'api/articles/:id', to: 'api/articles#show'
 	# post 'api/articles/:id', to: 'api/articles#show'

  get '/api/stuff', to: 'articles#stuff'

end
