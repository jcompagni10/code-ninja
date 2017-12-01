# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
user1= User.create({username: "user123", password: "pass123", email: "user@gmail.com" })
user2= User.create({username: "demo_user", password: "pass123", email: "user@gmail.com" })

#############
# LEVEL SET 1
############
task = Task.create!(
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
task.bulk_input_builder([["param1",Integer, "-100 ≤ param1 ≥ 1000"],[]]);
task.bulk_test_builder([[0, 0, 0], [10, 5, 2], [-10, -5, 2], [100, -10, -10], [117504, 256, 459]])

task = Task.create!(
    title: "Palindrome?",
    level_set_id: 1,
    order: 2,
    fxn_name: "isPalindrome",
    description: "Check if a given stirng is a palindrome.",
    example: "<ul><li>For inputString = 'aabaa', the output should be checkPalindrome(inputString) = true;</li>
              <li>For inputString = 'abac', the output should be</li>
              <li>checkPalindrome(inputString) = false;</li>
              <li>For inputString = 'a', the output should be</li>
              <li>checkPalindrome(inputString) = true.</li></ul>",
    time_limit: 4000,
    output_type: "Boolean",
    output_description: "true if inputString is a palindrome, false otherwise.",
)
task.bulk_input_builder([["inputString", "String", "1 ≤ inputString.length ≤ 105."]])
task.bulk_test_builder([[true, "racecar"], [false, "tests"], [true, "lionoil"], [true, "a"], [false, "ab"], [true, "abba"], [true, "a"*20+"b"*10 +"a"*20]])

task = Task.create!(
  title: "All Longest Strings",
  level_set_id: 1,
  order: 3,
  fxn_name: "longestStrings",
  description: "Given an array of strings, return another array containing all of its longest strings.",
  example: "For inputArray = ['aba', 'aa', 'ad', 'vcd', 'aba'], the output should be longestStrings(inputArray) = ['aba', 'vcd', 'aba'].",
  time_limit: 4000,
  output_type: "StringArray",
  output_description: "Array of the longest strings, stored in the same order as in the inputArray."
)
task.bulk_input_builder( [["inputArray", "StringArray", "1 ≤ inputArray.length ≤ 10, <br/> 1 ≤ inputArray[i].length ≤ 10."]] )
task.bulk_test_builder([
  [%w[a b c], %w[a b c]],
  [%w[aaa], %w[aaa b c]],
  [%w[aaa ccc ddd], %w[aaa bb ccc ddd]],
  [%w[hello world], %w[hello world]],
  [["abc"]*51, ['a'].concat((["abc"]*50).push('a'))],
 ])


task = Task.create!(
  title: "Adjacent Elements Product",
  level_set_id: 1,
  order: 4,
  fxn_name: "adjacentElementsProduct",
  description: "Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.",
  example: "For inputArray = [3, 6, -2, -5, 7, 3], the output should be adjacentElementsProduct(inputArray) = 21.",
  time_limit: 4000,
  output_type: "Integer",
  output_description: "The largest product of adjacent elements.",
)
task.bulk_input_builder([["inputArray", "IntegerArray", "2 ≤ inputArray.length ≤ 10,<br/> -1000 ≤ inputArray[i] ≤ 1000."]]);
task.bulk_test_builder([[21, [1, 3, 7]], [25, [5, 2, 1, 1, 5]], [10, [-2, -5, 2, 3]], [100, [-10, 5, 6, 3,-10, -2]], [1, [1, 1, 1, 1, -1]]])

#############
# LEVEL SET 2
############

task = Task.create!(
  title: "Reverse Parantheses",
  level_set_id: 2,
  order: 1,
  fxn_name: "reverseParantheses",
  description: "Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.",
  example: "For string s = 'a(bc)de', the output should be reverseParentheses(s) = 'acbde'.",
  time_limit: 4000,
  output_type: "String",
  output_description: "The new string",
)
task.bulk_input_builder([["s", "String", "5 ≤ s.length ≤ 55."]]);
task.bulk_test_builder([["acbde", "a(bc)de"], ["apmnolkjihgfedcbq", "a(bcdefghijkl(mno)p)q"], ["CodeegnlleahC", "Code(Cha(lle)nge)"], ["Look ma' no parantheses", "Look ma' no parantheses"], ["abcabcabcabc", "abc(cba)ab(bac)c"]])


task = Task.create!(
  title: "Sort By Height",
  level_set_id: 2,
  order: 2,
  fxn_name: "sortByHeight",
  description: "Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.",
  example: "For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].",
  time_limit: 3000,
  output_type: "IntegerArray",
  output_description: "Sorted array a with all the trees untouched.",
)
task.bulk_input_builder([["arr", "IntegerArray", "5 ≤ a.length ≤ 15,<br/>-1 ≤ a[i] ≤ 200."]]);
task.bulk_test_builder([
  [[-1, 150, 160, 170, -1, -1, 180, 190], [-1, 150, 190, 170, -1, -1, 160, 180]],
  [[-1, -1, -1, -1, -1], [-1, -1, -1, -1, -1]],
  [[2, 2, 4, 9, 11, 16], [4, 2, 9, 11, 2, 16]],
  [[-1, 10, 20, -1, 25], [-1, 10, 20, -1, 25]],
  [[-1, 10, -1, 10, -1, 10], [-1, 10, -1, 10, -1, 10]],
 ])


task = Task.create!(
  title: "Common Characters",
  level_set_id: 2,
  order: 3,
  fxn_name: "commonCharacters",
  description: "Given two strings, find the number of common characters between them.",
  example: "For s1 = 'aabcc' and s2 = 'adcaa', the output should be characterCount(s1, s2) = 3.",
  time_limit: 4000,
  output_type: "Integer",
  output_description: "An Integer representing the number of common characters shared by two strings"
)
task.bulk_input_builder([["s1", "String", "1 ≤ s1.length ≤ 15."], []])
task.bulk_test_builder([
  [3, "aabcc", "adcaa"],
  [4, "zzzz", "zzzzzzzzz"],
  [3, "abca", "xyzbac"],
  [0, "a", "b"],
  [1, "z", "z"],
  [2, "xyz", "xxxxxyy"]
 ])

task = Task.create!(
  title: "Word Ladder",
  level_set_id: 2,
  order: 4,
  fxn_name: "ladderBuilder",
  description: "Given an array of equal-length strings, check if it is possible to rearrange the strings in such a way that after the rearrangement the strings at consecutive positions would differ by exactly one character.",
  example: "<ul><li>For inputArray = ['aba', 'bbb', 'bab'], the output should be stringsRearrangement(inputArray) = false;</li>
                <li>For inputArray = ['ab', 'bb', 'aa'], the output should be stringsRearrangement(inputArray) = true. </li></ul>",
  time_limit: 4000,
  output_type: "Boolean",
  output_description: "A boolean representing whether a word laddder is possible"
)
task.bulk_input_builder([["inputArray", "StringArray", "2 ≤ inputArray.length ≤ 10,<br/> 1 ≤ inputArray[i].length ≤ 15."]])
task.bulk_test_builder([[false, ["aba", "bbb", "bab"]], [true, ["aaa", "aac", "bac"]], [true, ["z", "z"]],
                        [true, ["zzzzab", "zzzzbb", "zzzzaa"]], [false, ["ab", "ad", "ef", "eg"]], [true, ["abc", "bef", "bcc", "bec", "bbc", "bdc"]], [false, ["abc", "abx", "axx", "abc"]]] )

LevelSet.create(name: "Welcome To Codelandia", order: 1)
LevelSet.create(name: "You think you're smart?", order: 2)

bots = Bot.create([
  {
    task_id: 2,
    name: "Ada Lovelace",
    description: "Programmed computers before computers",
    order: 1,
    time: 240000,
    image_url: 'bots.svg'
  },
  {
    task_id: 4,
    name: "Alan Turing",
    description: "A True enigma...",
    order: 2,
    time: 500000,
    image_url: 'bots.svg'
  },
  {
    task_id: 5,
    name: "Yukihiro Matsumoto",
    description: "A Gem of a man.",
    order: 3,
    time: 300000,
    image_url: 'bots.svg'
  },
  {
    task_id: 6,
    name: "Bill Gates",
    description: "Wrote his first code at age 13",
    order: 4,
    time: 550000,
    image_url: 'bots.svg'
  },
  {
    task_id: 8,
    name: "Linus Torvalds",
    description: "This boss bot will rm -rf your confidence",
    order: 5,
    time: 6000000,
    image_url: 'bots.svg'
  },
  ])


#
# bots[0..4].each do |bot|
#
#   bot.match_result(user1, 1000)
# end
#
# bots[0..4].each_with_index do |bot, idx|
#   bot.match_result(user2, idx * 60000 + 300000)
# end
