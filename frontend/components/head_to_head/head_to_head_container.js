import { connect } from "react-redux";
import HeadToHeadIndex from "./head_to_head_index";
import { fetchUsers, fetchFightResults } from "../../actions/head_to_head";
import {createH2HFight} from "../../actions/fights";

const mapStateToProps = state => ({
  users: state.ui.users,
  fight_history: state.entities.fight_results,
  fight: state.fights
});

const mapDispatchToProps = dispatch => ({
  fetchUsers: query => dispatch(fetchUsers(query)),
  fetchFightResults: () => dispatch(fetchFightResults()),
  createFight: () => dispatch(createH2HFight())
});

export default connect(mapStateToProps, mapDispatchToProps)(HeadToHeadIndex);
