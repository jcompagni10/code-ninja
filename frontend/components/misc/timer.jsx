import React from 'react';

export default class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.timer = null;
  }

  setTimer(timeLimit){
    this.setState({timeLeft: timeLimit/1000});
  }

  startTimer(time){
    this.timer = setInterval(this._tick.bind(this), 1000);
  }

  timeDisplay(){
    let minutes = Math.floor(this.state.timeLeft/60);
    let seconds = this.state.timeLeft % 60;
    if (seconds < 10 ){
      seconds = "0" + seconds;
    }
    if (this.state.timeLeft <= 0 ){
      return "TIME'S UP";
    }
    return minutes+":"+seconds;
  }

  timerVisible(){
    return ["ready", "inProgress", "win", "loss"]
      .includes(this.props.status);
  }
  _tick(){
    let timeLeft = this.state.timeLeft - 1;
    if (timeLeft <= 0){
      clearInterval(this.timer);
      this.props.setFightStatus("timeUp");
    }

    this.setState({timeLeft: timeLeft});
  }

  componentWillReceiveProps(nextProps){
    if (nextProps.status === "inProgress") this.startTimer(nextProps.timeLimit);
    // TODO: should I be preventing this from being called multiple times
    if (nextProps.status === "ready") this.setTimer(nextProps.timeLimit);
  }

  render(){
    if (this.timerVisible()){
      return (
        <div className="timer_container">
          <div className="timer">
            {this.timeDisplay()}
          </div>
        </div>
      );
    }
    return null;
  }
}
