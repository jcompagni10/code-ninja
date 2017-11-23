import {connect} from 'react-redux';
import ArcadeIndex from './arcade_index';
import {fetchLevelSets} from '../../actions/arcade';

const mapStateToProps = state => (
  {levelSets: state.entities.levelSets}
);
const mapDispatchToProps = dispatch => ({
  fetchLevelSets: ()=>dispatch(fetchLevelSets())
});

export default connect(mapStateToProps,mapDispatchToProps)(ArcadeIndex);
