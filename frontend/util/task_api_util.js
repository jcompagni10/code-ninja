export const getTask = (id)=>(
  $.ajax({
  method: "GET",
  url: 'api/tasks/'+id
  })
);

export const postSolution = (user_solution) =>(
  $.ajax({
  method: "POST",
  url: 'api/submit',
  data: {user_solution}
  })
);
