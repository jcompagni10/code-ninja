import {connect} from 'react-redux';
import {submitSolution} from '../../../actions/task';
import ArcadeWrapper from './arcade_wrapper';


const mapDispatchToProps = dispatch => ({
  submitSolution: (solution)=>dispatch(submitSolution(solution)),
});

export default connect(null, mapDispatchToProps)(ArcadeWrapper);
