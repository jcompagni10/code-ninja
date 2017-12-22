export const getChallenges = () => (
    $.ajax({
        method: "GET",
        path: "api/challenges"
    })
);