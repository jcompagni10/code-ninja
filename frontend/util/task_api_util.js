export const getTask = id =>
  $.ajax({
    method: "GET",
    url: "api/tasks/" + id
  });

export const postSolution = userSolution =>
  $.ajax({
    method: "POST",
    url: "api/submit",
    data: { userSolution }
  });
