# Code Ninja

Code Ninja is a platform for code loving thrill seekers to brush up on their coding skills while completing a challenging cadre of coding conundrums. At the crux of the Code Ninja platform is a code evaluation system that safely executes and tests user written code. The code evaluation system sends all user code to a custom build AWS Lambda where it can be safely executed in a sandbox-like environment, effectively eliminating the normal risks --malicious code injections and runaway loops -- posed by server-side evaluation of foreign code. Code Ninja currently supports three different modes of play, Arcade, Bots and Challenges, each with its own set of tirelessly titillating tasks. Code Ninja is built on a Rails backend with React.js and Redux holding things down in the front. Code Ninja is ~~vaguely inspired by~~ a clone of codefights.com. 

## Features 
 + Impenetrable end-to-end user authentication using BCrypt.
 + Repl environment where users can write code.
 + Safe code evaluation on AWS lambda. 
 + A full suite of tests for each task.  
 + Dynamically display users code and console output 
 + Arcade mode for those of the faint of heart.
 + Bot mode for those will pit their coding chops against the likes of Alan Turing and Linus Torvalds.
+ Track user progress and score as they complete each stage

![code ninja](https://raw.githubusercontent.com/jcompagni10/code-ninja/master/Design%20Docs/Screen%20Shot%202017-12-01%20at%204.06.17%20PM.png)
### Code Evaluation

Most modern language make the task of converting user generated strings into executable code a relatively trivial task. The trouble is of course executing this code safely without risking the integrity of the server running this code. These potential dangers exist in two forms: users may unwittingly write endless loops into their code or malicious users could execute code to compromise the data stored on the served. Code Ninjas solves this problem by executing user code remotely on an AWS Lambda. After a user submits a solution it is sent along with a suite of tests via HTTP to an AWS API Gateway where it is routed to the correct AWS Lamba. Within the confines of the Lambda the code can first be safely evaluated and then run against a full battery of tests to insure its correctness. The AWS Lambda operates as a separate micro-instance so malicious code cannot interfere with other process or information. Furthermore, each Lambda function is governed by a parent system which kills any process that lasts longer than a certain time period. Evaluating code on the lambda also makes it much easier to one day support evaluation across a number of different languages. 

```javascript 
#lambda_code_runner.js
mexports.handler = function(event, context, callback) {
  let LOGFILE = "";
  console.log = function(...inputs){
    inputs.forEach(input=>(
      LOGFILE += " " + input
    ));
    LOGFILE += "\n";
  };
  try{
    eval(event["user_code"]);
    let tests = event['tests'];
    let results = tests.map(test => {
         return eval(test)
    }
    );
    callback(null, {results: results});
  }
  catch(err){
    callback(null, {errorMessage: err.message});
  }

```

### REPL Environment

Code Ninja boasts a state of the art REPL environment for running and testing code. Syntax hi-lighting and bracket matching is powered by code mirror. User code can be safely run against a battery of task specific tests. When teeing off against a deviously sticky problem users may find it necessary to log the output of some portion of the code. Despite being executed in the far off and mysterious lands of AWS, users can still see their console output. This feature is supported via nifty redefinition of the console.log function (see #lambda_code_runner.js). 

![repl](https://raw.githubusercontent.com/jcompagni10/code-ninja/master/Design%20Docs/Screen%20Shot%202017-12-01%20at%204.06.26%20PM.png)

### Technologies 

Rails serves as the perfect backend for this project. Providing a powerful framework to deftly handle Code Ninja’s robust API needs. On the frontend React provides lightening fast DOM rendering to support code ninjas snappy gameplay. Redux plays a pivotal roll keeping the apps frontend data in check to insure a reliable and consistent user experience. 

### Possible future features

 + AI
 + Support for NP-hard problems
