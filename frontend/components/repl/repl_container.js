import {connect} from 'react-redux';
import {fetchTask, submitSolution} from '../../actions/task';
import {fetchLevelSets} from '../../actions/arcade';
import REPL from './repl';
import {withRouter} from 'react-router';
import {loadBotFight} from '../../actions/fights';

const mapStateToProps = state => {
  return {
  task:state.entities.currentTask,
  passedTests: state.entities.currentTests.passed,
  tests: state.entities.currentTests.tests,
  levelSets: state.entities.levelSets,
  };

};
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTask: (id)=>dispatch(fetchTask(id)),
  fetchLevelSets: ()=>dispatch(fetchLevelSets()),
});

// TODO: do I need with router?
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(REPL));
