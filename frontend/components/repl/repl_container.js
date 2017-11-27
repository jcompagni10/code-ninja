import {connect} from 'react-redux';
import {fetchTask, submitSolution} from '../../actions/task';
import REPL from './repl';

const mapStateToProps = (state, ownProps) => (
  {
    currentUser: state.session.currentUser,
    task:state.entities.currentTask,
    mode: ownProps.match.params.mode,
  }

);
const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchTask: ()=>dispatch(fetchTask(ownProps.match.params.taskId)),
  submitSolution: (solution)=>dispatch(submitSolution(solution))
});

export default connect(mapStateToProps,mapDispatchToProps)(REPL);
