export const getBots = ()=>(
  $.ajax({
  method: "GET",
  url: 'api/bots'
  })
);

export const getBot = (id)=>(
  $.ajax({
  method: "GET",
  url: 'api/bots/' +id
  })
);
