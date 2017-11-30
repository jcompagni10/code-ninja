import {connect} from 'react-redux';
import Timer from './timer';
import {setFightStatus} from '../../actions/fights';

const mapStateToProps = state => (
  {
    status: state.fights.status,
    timeLimit: state.fights.timeLimit
  }
);

const mapDispatchToProps = dispatch => ({
  setFightStatus: (status) => dispatch(setFightStatus(status))
});

export default connect(mapStateToProps,mapDispatchToProps)(Timer);
