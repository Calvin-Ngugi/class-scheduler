# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "Seeding starting"
#create users
  #Course.destroy_all
  course1=Course.create(course_name:"Machine Learning",description:"The capability of a machine to imitate intelligent human behavior is refer to machine learning")
  course2=Course.create(course_name:"Digital Marketing",description:"Is the promotion of brands to connect with potential customers using the internet and other forms of digital communication")
  course3=Course.create(course_name:"Software Engineering",description:"the branch of computer science that deals with the design, development, testing, and maintenance of software applications")
puts "Seeding end"
