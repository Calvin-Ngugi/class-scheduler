Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  resources :announcements
  resources :course_sessions
  resources :courses
  resources :comments do
    put :like, on: :member
    get :status, on: :member
  end
  
  post '/signup', to: 'users#create'
  get '/me', to: "users#show"
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/search_courses', to: 'courses#search'
  get '/search_coursesessions', to: 'course_sessions#search'
end
