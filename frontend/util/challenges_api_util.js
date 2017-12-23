export const getChallenges = ()=>(
    $.ajax({
      method: "GET",
      url: 'api/challenges'
    })
  );
  