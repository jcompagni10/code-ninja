import React from 'react';
import ArcadeIndexItem from './arcade_index_item';

export default class ArcadeIndex extends React.Component{

  componentDidMount(){
    this.props.fetchLevelSets();
  }

  levelSet(id){
    return this.props.levelSets.by_id[id];
  }

  levelSetIds(){
    return this.props.levelSets.ids;
  }

  render(){
    if (this.levelSetIds() === undefined ){
      return "LOADING";
    }
    return (
      <div className="arcade-content row">
        <div className="arcade-container">
          <h1>Arcade</h1>
        {this.levelSetIds().map(id=>(
          <ArcadeIndexItem key = {id} indexItem = {this.levelSet(id)}/>
        ))}
        </div>
      </div>
    );
  }
}
