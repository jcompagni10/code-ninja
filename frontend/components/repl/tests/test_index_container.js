import {connect} from 'react-redux';
import TestIndex from './test_index';

const mapStateToProps = (state, ownProps) => (
  {
    tests: Object.values(state.entities.currentTests),
    task_inputs: state.entities.currentTask.inputs,
  }

);
const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(TestIndex);