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
    let botId = this.props.match.params.botId;
    this.props.loadBotFight(botId);
    if (!this.ready()) {
      this.props.fetchBot(botId);
    }
  }

  componentWillUnmount() {
    if (this.props.fights.status === "inProgress") {
      this.handleLoss();
    }
    this.props.setFightStatus("over");
  }

  bot() {
    return this.props.bots.by_id[this.props.match.params.botId];
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
    return this.props.bots.by_id && this.bot();
  }

  submit(code) {
    const solution = {
      task_id: this.props.match.params.taskId,
      mode: "bots",
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
            opponentName={this.bot().name}
            opponentImage={this.bot().image_url}
          />
        </div>
      );
    } else return null;
  }
}
