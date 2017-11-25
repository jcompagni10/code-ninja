export const getTask = (id)=>(
  $.ajax({
    method: "GET",
    url: 'api/tasks/'+id
  })
);
