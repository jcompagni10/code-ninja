import {connect} from 'react-redux';
import console from './console';

const mapStateToProps = (state, ownProps) => (
  {
    log: state.entities.currentTests.log,
    errors: state.entities.currentTestErrors,
    loading: state.ui.testsLoading
  }

);
const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(console);
