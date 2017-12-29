import {connect} from 'react-redux';
import HeadToHeadIndex from './head_to_head_index';
import {fetchUsers} from '../../actions/head_to_head';

const mapStateToProps = state => (
  {users: state.ui.users}
);
const mapDispatchToProps = dispatch => ({
  fetchUsers: (query)=>dispatch(fetchUsers(query))
});

export default connect(mapStateToProps,mapDispatchToProps)(HeadToHeadIndex);
