import { connect } from "react-redux";
import { setFightStatus, loadBotFight } from "../../../actions/fights";
import { submitSolution } from "../../../actions/task";
import HeadToHeadWrapper from "./head_to_head_wrapper";

// import { fetchBot } from "../../../actions/bots";
const mapStateToProps = (state, ownProps) => ({
  fights: state.fights,
  tests: state.entities.currentTests,
  currentUser: state.session.currentUser,
  // bots: state.entities.bots
});

const mapDispatchToProps = dispatch => ({
  setFightStatus: status => dispatch(setFightStatus(status)),
  // loadHeadToHead: userId => dispatch(loadBotFight(userId)),
  // fetchBot: botId => dispatch(fetchBot(botId)),
  submitSolution: solution => dispatch(submitSolution(solution))
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadToHeadWrapper);
