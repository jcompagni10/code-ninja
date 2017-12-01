exports.handler = function(event, context, callback) {
  let result;
  try{
    eval(event["user_code"]);
    let tests = event['tests'];
    let results = tests.map(test => {
         return eval(test)
    }
    );
    callback(null, JSON.stringif(results));
  }
  catch(err){
    callback({error: err.message});
  }

};
