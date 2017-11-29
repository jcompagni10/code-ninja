import {connect} from 'react-redux';
import {fetchTask, submitSolution} from '../../actions/task';
import {fetchLevelSets} from '../../actions/arcade';
import REPL from './repl';
import {withRouter} from 'react-router';
const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    task:state.entities.currentTask,
    passedTests: state.entities.currentTests.passed,
    tests: state.entities.currentTests.tests,
    levelSets: state.entities.levelSets,
    fights: state.fights
  };

};
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTask: (id)=>dispatch(fetchTask(id)),
  submitSolution: (solution)=>dispatch(submitSolution(solution)),
  fetchLevelSets: ()=>dispatch(fetchLevelSets())

});
// TODO: do I need with router?
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(REPL));
