export const getLevelSets = ()=>(
  $.ajax({
    method: "GET",
    url: 'api/level_sets'
  })
);
