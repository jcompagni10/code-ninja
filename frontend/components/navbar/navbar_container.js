import {connect} from 'react-redux';
import navBar from './navBar';
import {logout} from '../../actions/session.js';

const mapStateToProps = state => (
  {currentUser: state.session.currentUser}
);
const mapDispatchToProps = dispatch => ({
  logout: ()=>dispatch(logout())
});

export default connect(mapStateToProps,mapDispatchToProps)(navBar);
