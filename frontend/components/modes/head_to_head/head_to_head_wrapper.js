import React from "react";
import REPLContainer from "../../repl/repl_container";
import FightModal from "./fight_modal";
import { updateBotFight } from "../../../util/fight_api_util";
export default class BotFightController extends React.Component {

  componentWillReceiveProps(nextProps) {
    if (nextProps.fights.status === "timeUp") this.handleTimeUp();
    if (nextProps.tests.passed && nextProps.fights.status === "inProgress") {
      this.handleWin();
    }
  }

  handleTimeUp() {
    this.props.setFightStatus("loss");
    this.handleLoss();
  }

  handleWin() {
    this.props.setFightStatus("win");
  }

  handleLoss() {
    updateBotFight(this.props.fights.fightId, "loss");
  }

  componentDidMount() {

    let opId = this.props.match.params.botId;
  }

  componentWillUnmount() {
    // if (this.props.fights.status === "inProgress") {
    //   this.handleLoss();
    // }
    // this.props.setFightStatus("over");
  }

  opponent() {
    return {img_url: "https://media.istockphoto.com/vectors/hacker-silhouette-with-question-symbol-on-the-blue-background-with-vector-id853879324?k=6&m=853879324&s=612x612&w=0&h=ev12cJNEDCav4012scLImGuteci6a0FPFBSZdDvsgm4=",
            username: "h4x0r99"
            };
    // return this.props.bots.by_id[this.props.match.params.botId];
  }

  handleStart() {
    this.props.setFightStatus("inProgress");
  }
 
  botLoaded() {
    const botId = this.props.match.params.botId;
    return this.props.bots.by_id && this.props.bots.by_id[botId];
  }

  modalVisible() {
    return ["ready", "win", "loss"].includes(this.props.fights.status);
  }

  ready() {
    return true;
  }

  submit(code) {
    const solution = {
      task_id: this.props.match.params.taskId,
      mode: "h2h",
      solution: code
    };
    this.props.submitSolution(solution);
  }

  render() {
    if (this.ready()) {
      return (
        <div>
          <REPLContainer submit={this.submit.bind(this)} />
          <FightModal
            status={this.props.fights.status}
            show={this.modalVisible()}
            handleStart={this.handleStart.bind(this)}
            currentUser={this.props.currentUser}
            opponentName={this.opponent().username}
            opponentImage={this.opponent().img_url}
          />
        </div>
      );
    } else return null;
  }
}
