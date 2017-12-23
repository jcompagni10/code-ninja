import React from 'react';

const dataDescription={
  arcade: " tasks solved",
  bots: " bots beaten",
  challenges: " challenges completed"
};

export default class ProgressBar extends React.Component {
  constructor(){
  super();

  this.state = {
    barStyle: {width: "0%"}
  };
  }

  barWidth(){
  return {width: (this.props.data[0]/this.props.data[1]*100)+"%"};
  }
  componentDidMount(){
  window.setTimeout(()=>this.setState({barStyle: this.barWidth()}), 1000);
  }

  render() {
  const data = this.props.data;
  const type = this.props.type;
  return (

  <div className ="nav-item-data">
    <div className="data-title">
    {data[0]}/{data[1]}
    {dataDescription[type]}
    </div>
    <div className="progress-bar-outer" >
    <div className="progress-bar-inner"
      style={this.state.barStyle}>
    </div>
    </div>
  </div>
  );
}}
