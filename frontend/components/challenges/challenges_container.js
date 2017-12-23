import {connect} from 'react-redux';
import ChallengesIndex from './challenges_index';
import {fetchChallenges} from '../../actions/challenges';

const mapStateToProps = state => (
  {challenges: state.entities.challenges}
);
const mapDispatchToProps = dispatch => ({
  fetchChallenges: ()=>dispatch(fetchChallenges())
});

export default connect(mapStateToProps,mapDispatchToProps)(ChallengesIndex);

