import {connect} from 'react-redux';
import Timer from './timer';

const mapStateToProps = state => (
  {
    timerVisible: state.fights.timerVisible,
    timeLimit: state.fights.timeLimit
  }
);
const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps,mapDispatchToProps)(Timer);
