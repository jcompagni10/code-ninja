import {connect} from 'react-redux';
import ArcadeIndex from './arcade_index';

const mapStateToProps = state => (
  {currentUser: state.session.currentUser}
);
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps,mapDispatchToProps)(ArcadeIndex);
