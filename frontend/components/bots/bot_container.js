import { connect } from "react-redux";
import BotIndex from "./bot_index";
import { fetchBots } from "../../actions/bots";

const mapStateToProps = state => ({ bots: state.entities.bots });
const mapDispatchToProps = dispatch => ({
  fetchBots: () => dispatch(fetchBots())
});

export default connect(mapStateToProps, mapDispatchToProps)(BotIndex);
