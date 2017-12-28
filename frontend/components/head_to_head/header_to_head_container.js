import {connect} from 'react-redux';
import HeadToHeadIndex from './bot_index';
import {fetchUsers} from '../../actions/head_to_head';

const mapStateToProps = state => (
  {bots: state.entities.bots}
);
const mapDispatchToProps = dispatch => ({
  fetchUsers: (query)=>dispatch(fetchUsers(query))
});

export default connect(mapStateToProps,mapDispatchToProps)(BotIndex);
