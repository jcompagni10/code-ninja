import { connect } from "react-redux";
import { submitSolution } from "../../../actions/task";
import ChallengesWrapper from "./challenges_wrapper";

const mapDispatchToProps = dispatch => ({
  submitSolution: solution => dispatch(submitSolution(solution))
});

export default connect(null, mapDispatchToProps)(ChallengesWrapper);
