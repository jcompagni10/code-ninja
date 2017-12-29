export const getUsers = (query)=>(
  $.ajax({
  method: "GET",
  url: "api/users?search="+query
  })
);
