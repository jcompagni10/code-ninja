# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1= User.create({username: "user123", password: "pass123", email: "user@gmail.com" })
user2= User.create({username: "demo_user", password: "pass123", email: "user@gmail.com" })

tasks1 = Task.create!([
  {
    title: "Add",
    level_set_id: 1,
    order: 1,
    fxn_name: "add",
    description: "Write a function that returns the sum of two numbers.",
    example: "For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.",
    time_limit: 4000,
    output_type: "Integer",
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
    output_type: "Integer",
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
    output_type: "Integer",
    output_description: "The product of the two inputs."
  }
])
tasks2 = Task.create([
  {
    title: "Add2",
    level_set_id: 2,
    order: 1,
    fxn_name: "add",
    description: "Write a function that returns the sum of two numbers.",
    example: "For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.",
    time_limit: 4000,
    output_type: "Integer",
    output_description: "The sum of the two inputs.",
  },
  {
    title: "Subtract2",
    level_set_id: 2,
    order: 3,
    fxn_name: "subtract",
    description: "Write a function that returns the difference of two numbers.",
    example: "For param1 = 8 and param2 = 7, the output should be subtract(param1, param2) = 1.",
    time_limit: 4000,
    output_type: "Integer",
    output_description: "The difference of the two inputs.",
  },
  {
    title: "Multiply2",
    level_set_id: 2,
    order: 2,
    fxn_name: "multiply",
    description: "Write a function that returns the product of two numbers.",
    example: "For param1 = 8 and param2 = 7, the output should be multiply(param1, param2) = 56.",
    time_limit: 4000,
    output_type: "Integer",
    output_description: "The product of the two inputs."
  }
])
LevelSet.create(name: "Welcome To Codelandia", order: 1)
LevelSet.create(name: "You think you're smart?", order: 2)
tasks1.each do |task|
  UserTaskCompletion.complete_task(task, :arcade, 180, user1)
end
UserTaskCompletion.complete_task(tasks2[0], :arcade, 180, user1)

bots = Bot.create([
  {
    task_id: 1,
    name: "Ada Lovelace",
    description: "Programmed computers before computers",
    order: 1,
    time: 300000,
    image_url: 'bots.svg'
  },
  {
    task_id: 2,
    name: "Alan Turing",
    description: "An Enigma of man.",
    order: 2,
    time: 500000,
    image_url: 'bots.svg'
  },
  {
    task_id: 3,
    name: "Yukihiro Matsumoto",
    description: "A Gem of a man.",
    order: 3,
    time: 300000,
    image_url: 'bots.svg'
  },
  {
    task_id: 4,
    name: "Bill Gates",
    description: "Wrote his first code at age 13",
    order: 4,
    time: 550000,
    image_url: 'bots.svg'
  },
  {
    task_id: 5,
    name: "Linus Torvalds",
    description: "This boss bot will rm -rf your condfidence",
    order: 5,
    time: 6000000,
    image_url: 'bots.svg'
  },
  ])

t1inputs = tasks1[0].inputs.create!([
  {
    task_id: tasks1[0].id,
    order: 1,
    input_name: "param1",
    input_type: "Integer",
    constraints: "-100 ≤ param1 ≥ 1000"
  },
  {
    task_id: tasks1[0].id,
    order: 2,
    input_name: "param2",
    input_type: "Integer",
    constraints: "-100 ≤ param2 ≥ 1000"
  }
])

bots[0..4].each do |bot|

  bot.match_result(user1, 1000)
end

bots[0..4].each_with_index do |bot, idx|
  bot.match_result(user2, idx * 60000 + 300000)
end

test1 = Test.create!([
  {
    task_id: 1,
    order: 1,
    output: 2
  },
  {
    task_id: 1,
    order: 2,
    output: 7
  }
])

task1TestInputs = TestInput.create!([
  # test1
  {
    test_id: test1[0].id,
    order: 1,
    value: 1,
  },
  {
    test_id: test1[0].id,
    order: 2,
    value: 1,
  },
  # test2
  {
    test_id: test1[1].id,
    order: 1,
    value: 5,
  },
  {
    test_id: test1[1].id,
    order: 2,
    value: 2,
  }
])
