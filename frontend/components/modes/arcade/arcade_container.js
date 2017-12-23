import {connect} from 'react-redux';
import {submitSolution} from '../../../actions/task';
import ArcadeWrapper from './arcade_wrapper';
import {fetchBot} from '../../../actions/bots';
const mapStateToProps = (state, ownProps) => (
  {
  // fights: state.fights,
  // tests: state.entities.currentTests,
  // currentUser: state.session.currentUser,
  // bots: state.entities.bots
  }
);

const mapDispatchToProps = dispatch => ({
  submitSolution: (solution)=>dispatch(submitSolution(solution)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArcadeWrapper);
