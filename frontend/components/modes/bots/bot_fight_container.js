import {connect} from 'react-redux';
import {setFightStatus, loadBotFight} from '../../../actions/fights';
import {submitSolution} from '../../../actions/task';
import BotFightWrapper from './bot_fight_wrapper';
import {fetchBot} from '../../../actions/bots';
const mapStateToProps = (state, ownProps) => (
  {
    fights: state.fights,
    tests: state.entities.currentTests,
    currentUser: state.session.currentUser,
    bots: state.entities.bots
  }
);

const mapDispatchToProps = dispatch => ({
  setFightStatus: (status) => dispatch(setFightStatus(status)),
  loadBotFight: (botId) => dispatch(loadBotFight(botId)),
  fetchBot: (botId) => dispatch(fetchBot(botId)),
  submitSolution: (solution)=>dispatch(submitSolution(solution)),


});

export default connect(mapStateToProps, mapDispatchToProps)(BotFightWrapper);
