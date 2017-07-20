Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :games

  get '/magic', to: 'pages#magic'
  get '/magic_answer', to: 'pages#magic_answer'

  get '/secret', to: 'pages#secret'
  get '/secret_answer', to: 'pages#secret_answer'

  get '/rock', to: 'pages#rock'
  get '/rock_answer', to: 'pages#rock_answer'

end
