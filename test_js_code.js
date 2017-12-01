exports.handler = function(event, context, callback) {
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

};
