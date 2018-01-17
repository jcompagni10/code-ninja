export const getUsers = query =>
  $.ajax({
    method: "GET",
    url: "api/users?search=" + query
  });

export const getFightResults = () =>
  $.ajax({
    method: "GET",
    url: "api/head_to_head_results"
  });

export const createFight = () =>
  $.ajax({
    method: "POST",
    url: "api/head_to_head_results"
  });
