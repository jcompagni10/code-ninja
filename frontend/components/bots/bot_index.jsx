import React from 'react';
import BotIndexItem from './bot_index_item';

export default class ArcadeIndex extends React.Component{

  componentDidMount(){
  this.props.fetchBots();
  }

  bot(id){
  return this.props.bots.by_id[id];
  }

  botIds(){
  return this.props.bots.ids;
  }

  render(){
  if (this.botIds() === undefined ){
    return "LOADING";
  }
  return (
    <div className="bot-content row">
    <div className="bot-container">
      <h1>Bots</h1>
    {this.botIds().map(id=>(
      <BotIndexItem key = {id} indexItem = {this.bot(id)}/>
    ))}
    </div>
    </div>
  );
  }
}
