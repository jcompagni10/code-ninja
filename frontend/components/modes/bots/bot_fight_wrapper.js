import React from 'react';
import REPLContainer from '../repl/repl_container';
import FightModal from './fight_modal';

export default class BotFightController extends React.Component{

  componentWillReceiveProps(newProps){
    if (newProps.fights.status === "timeUp") this.handleTimeUp();
    if (newProps.tests.passed) this.handleWin();
  }

  handleTimeUp(){
    this.props.setFightStatus("loss");
  }

  handleWin(){
    this.props.setFightStatus("win");
  }

  componentDidMount(){
    let botId = this.props.match.params.botId;
    this.props.loadBotFight(botId);
    if (!this.ready()){
      this.props.fetchBot(botId);
    }
  }

  bot(){
    return this.props.bots.by_id[this.props.match.params.botId];
  }
  handleStart(){
    this.props.setFightStatus("inProgress");
  }

  botLoaded(){
    const botId = this.props.match.params.botId;
    return this.props.bots.by_id && this.props.bots.by_id[botId];
  }

  modalVisible(){
    return ["ready", "win", "loss"].includes(this.props.fights.status);
  }

  ready(){
    return this.props.bots.by_id && this.bot();
  }

  submit(code){
    const solution = {
      task_id: this.props.match.params.taskId,
      mode: "bots",
      fight_id: this.props.fights.fightId,
      solution: code
    };
    this.props.submitSolution(solution);
  }

  render(){
    if (this.ready()){
      return (
        <div>
          <REPLContainer
            submit = {this.submit.bind(this)}
          />
          <FightModal
            status= {this.props.fights.status}
            show= {this.modalVisible()}
            handleStart = {this.handleStart.bind(this)}
            currentUser = {this.props.currentUser}
            opponentName = {this.bot().name}
            opponentImage = {this.bot().image_url}
          />
        </div>
      );
    }
    else return null;
  }
}
