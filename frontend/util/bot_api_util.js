export const getBots = ()=>(
  $.ajax({
    method: "GET",
    url: 'api/bots'
  })
);
