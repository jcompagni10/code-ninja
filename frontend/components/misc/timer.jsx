import React from 'react';

export default class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
    this.timer = null;
  }

  startTimer(time){
    this.setState({timeLeft: time/1000});
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

  _tick(){
    let timeLeft = this.state.timeLeft - 1;
    if (timeLeft <= 0) clearInterval(this.timer);
    this.setState({timeLeft: timeLeft});
  }

  componentWillReceiveProps(newProps){
    if (newProps.timerVisible) this.startTimer(newProps.timeLimit);
  }

  render(){
    if (this.props.timerVisible){
      return (
        <div className="timer_container">
          <div className="timer">
            {this.timeDisplay()}
          </div>
        </div>
      );
    } else{
      return null;
    }
  }
}
