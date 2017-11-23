# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create({username: "user123", password: "pass123", email: "user@gmail.com" })
User.create({username: "demo_user", password: "pass123", email: "user@gmail.com" })

tasks = Task.create([
  {
    title: "Add",
    level_set_id: 1,
    order: 1,
    fxn_name: "add",
    description: "Write a function that returns the sum of two numbers.",
    example: "For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.",
    time_limit: 4000,
    output_type: "integer",
    output_description: "The sum of the two inputs.",
  },
  {
    title: "Subtract",
    level_set_id: 1,
    order: 3,
    fxn_name: "subtract",
    description: "Write a function that returns the difference of two numbers.",
    example: "For param1 = 8 and param2 = 7, the output should be subtract(param1, param2) = 1.",
    time_limit: 4000,
    output_type: "integer",
    output_description: "The difference of the two inputs.",
  },
  {
    title: "Multiply",
    level_set_id: 1,
    order: 2,
    fxn_name: "multiply",
    description: "Write a function that returns the product of two numbers.",
    example: "For param1 = 8 and param2 = 7, the output should be multiply(param1, param2) = 56.",
    time_limit: 4000,
    output_type: "integer",
    output_description: "The product of the two inputs."
  }
])

LevelSet.create(name: "Welcome To Codelandia", order: 1)
