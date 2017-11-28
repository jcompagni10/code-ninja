# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1= User.create({username: "user123", password: "pass123", email: "user@gmail.com" })
user2= User.create({username: "demo_user", password: "pass123", email: "user@gmail.com" })

task1 = Task.create!(
    title: "Multiply",
    level_set_id: 1,
    order: 1,
    fxn_name: "multiply",
    description: "Write a function that returns the product of two numbers.",
    example: "For param1 = 1 and param2 = 2, the output should be multiply(param1, param2) = 2.",
    time_limit: 4000,
    output_type: "Integer",
    output_description: "The product of the two inputs.",
)
task1.bulk_input_builder([["param1",Integer, "-100 ≤ param1 ≥ 1000"],[]]);
task1.bulk_test_builder([[0, 0, 0], [10, 5, 2], [-10, -5, 2], [100, -10, -10]])

task2 = Task.create!(
  title: "Sort By Height",
  level_set_id: 1,
  order: 2,
  fxn_name: "sortByHeight",
  description: "Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.",
  example: "For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].",
  time_limit: 3000,
  output_type: "IntegerArray",
  output_description: "Sorted array a with all the trees untouched.",
)
task2.bulk_input_builder([["arr", "IntegerArray", "5 ≤ a.length ≤ 15,<br/>-1 ≤ a[i] ≤ 200."]]);
task2.bulk_test_builder([
  [[-1, 150, 160, 170, -1, -1, 180, 190], [-1, 150, 190, 170, -1, -1, 160, 180]],
  [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]],
  [[2, 2, 4, 9, 11, 16], [4, 2, 9, 11, 2, 16]],
  [[-1, 10, 20, -1, 25], [-1, 10, 20, -1, 25]],
  [[-1, 10, -1, 10, -1, 10], [-1, 10, -1, 10, -1, 10]],
 ])

task3 = Task.create!(
  title: "All Longest Strings",
  level_set_id: 1,
  order: 3,
  fxn_name: "LongestStrings",
  description: "Given an array of strings, return another array containing all of its longest strings.",
  example: "For inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'], the output should be longestStrings(inputArray) = ['aba', 'vcd', 'aba'].",
  time_limit: 4000,
  output_type: "StringArray",
  output_description: "Array of the longest strings, stored in the same order as in the inputArray."
)
  task3.bulk_input_builder( [["inputArray", "StringArray", "1 ≤ inputArray.length ≤ 10, <br/> 1 ≤ inputArray[i].length ≤ 10."]] )
  task3.bulk_test_builder([
    [%w[a b c], %w[a b c]],
    [%w[aaa], %w[aaa b c]],
    [%w[aaa ccc ddd], %w[aaa bb ccc ddd]],
    [%w[hello world], %w[hello world]],
    [["abc"]*51, ['a'].concat((["abc"]*50).push('a'))],
   ])
task4 = Task.create!(
  title: "Common Characters",
  level_set_id: 1,
  order: 4,
  fxn_name: "commonCharacters",
  description: "Given two strings, find the number of common characters between them.",
  example: "For s1 = 'aabcc' and s2 = 'adcaa', the output should be characterCount(s1, s2) = 3.",
  time_limit: 4000,
  output_type: "Integer",
  output_description: "An Integer representing the number of common characters shared by two strings"
)
task4.bulk_input_builder([["s1", "String", "1 ≤ s1.length ≤ 15."], []])
task4.bulk_test_builder([
  [3, "aabcc", "adcaa"],
  [4, "zzzz", "zzzzzzzzz"],
  [3, "abca", "xyzbac"],
  [0, "a", "b"],
  [1, "z", "z"],
  [2, "xyz", "xxxxxyy"]
 ])

LevelSet.create(name: "Welcome To Codelandia", order: 1)
# LevelSet.create(name: "You think you're smart?", order: 2)
# tasks1.each do |task|
#   UserTaskCompletion.complete_task(task, :arcade, 180, user1)
# end
# UserTaskCompletion.complete_task(tasks2[0], :arcade, 180, user1)

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



bots[0..4].each do |bot|

  bot.match_result(user1, 1000)
end

bots[0..4].each_with_index do |bot, idx|
  bot.match_result(user2, idx * 60000 + 300000)
end
