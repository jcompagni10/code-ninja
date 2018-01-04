import { connect } from "react-redux";
import TestIndex from "./test_index";

const mapStateToProps = (state, ownProps) => ({
  tests: Object.values(state.entities.currentTests.tests),
  task_inputs: state.entities.currentTask.inputs,
  errors: state.entities.currentTestErrors,
  loading: state.ui.testsLoading
});
const mapDispatchToProps = (dispatch, ownProps) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TestIndex);
