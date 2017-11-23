{
  entities: {
    bots: {
      by_id: {
        1: {
          id: 1,
          name: "Ada Lovelace",
          description: "Everybody's gotta start somewhere"
          task_id: 11,
          time: 50000,
          wins: 4,
          losses: 12,
          ties: 2,
          current_user_beaten: true
        },
        2: {
          id: 2,
          name: "Yukihiro Matsumoto",
          description: "A real gem of a programmer"
          task_id: 22,
          time: 100000,
          wins: 8,
          losses: 3,
          ties: 1,
          current_user_beaten: false
        },
        3: {
          id: 2,
          name: "Brendan Eich",
          description: "This ones a real (fire)fox"
          task_id: 22,
          time: 150000,
          wins: 5,
          losses: 1,
          ties: 0,
          current_user_beaten: false
        },
      }
      ids: [1,2,3]
    },
    level sets: {
      by_id:{
        1: {
          id: 1,
          name: "Easy As Pi",
          image_url: http://imagehost.com/imgname,
          completed_by_user: true
        //tasks are stored in array ordered by task.order
          tasks: [
            {
              id: 1,
              name: "add",
              current_user_completed: true
            },
            {
              id: 5,
              name: "subtract",
              current_user_completed: true
            },
            {
              id: 6,
              name: "Year from Century",
              current_user_completed: true
            },
          ]
        }
        2: {
          id: 1,
          name: "Getting Tricky",
          image_url: http://imagehost.com/imgname2,
          completed_by_user: false
          tasks: [
            {
              id: 8,
              name: "base10toBinary",
              current_user_completed: true
             },
            {
              id: 10,
              name: "substrings",
              current_user_completed: true
             },
            {
              id: 12,
              name: "sortByDigitalRoot",
              current_user_completed: false
            },
           ]
        },
      }
      ids: [1,2]
    },
    current_task: {
      title: "add",
      fxn_name: "add (input1, input2)",
      description: "Write a function that returns the sum of two numbers.",
      example: "For param1 = 1 and param2 = 2, the output should be add(param1, param2) = 3.",
      time_limit: "2000", //in ms
      output_type: "integer",
      output_description: "The sum of the two inputs.",
      num_tests: 4
    }
    current_tests: {
      passed: false,
      tests: [
        {
          inputs: [1,2],
          expected: 3,
          got: 3,
          passed: true,
        },
        {
          inputs: [5,2],
          expected: 7,
          got: 7,
          passed: true,
        },
        {
          inputs: [-5,2],
          expected: -3,
          got: 3,
          passed: false,
        }
      ]
    },
  }
  ui: {
    loading: true/false,
    mode: arcade
  },
  errors: {
    login: ["Incorrect username/password combination"],
    signup: ["password too short", "username taken",...etc]
  },
  session: {
    currentUser: {
      id: 57,
      username: "h4ker99",
      img_url: "https://cdn.pixabay.com/photo/2013/12/29/03/47/hawk-234999_960_720.jpg"
      challenges_solved: 1,
      challenges_shortest: 156, \\num chars in solution
      bot_beaten: 2,
      level_beaten: 2,
      default_language: 'ruby'
     score: 5000
    }
  }
}
