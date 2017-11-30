// import {connect} from 'react-redux';
// import FightModal from './fight_modal';
// import {fetchBots} from '../../actions/bots';
// import {withRouter} from 'react-router';
// import {startBotFight, setFightStatus} from '../../actions/fights';
// const mapStateToProps = (state, ownProps) => (
//   {
//     bots: state.entities.bots,
//     currentUser: state.session.currentUser,
//     fights: state.fights
//   }
// );
// const mapDispatchToProps = dispatch => ({
//   fetchBots: ()=>dispatch(fetchBots()),
//   startBotFight: (botId)=>dispatch(startBotFight(botId)),
//   setFightStatus: (status) =>dispatch(setFightStatus(status))
// });
//
// export default withRouter(connect(mapStateToProps,mapDispatchToProps)(FightModal));
