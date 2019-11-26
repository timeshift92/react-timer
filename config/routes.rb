Rails.application.routes.draw do
  resources :timer_ticks
  resources :timers 
  get 'last', to: 'timers#last'

  root 'home#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
