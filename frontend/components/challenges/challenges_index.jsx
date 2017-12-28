import React from 'react';
import ChallengeIndexItem from './challenge_index_item';
// 
export default class ChallengeIndex extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchChallenges()
  }
  
  render(){
    let challenges = this.props.challenges;
    if (challenges.all_ids){
      return (
        <div className="challenge-content row">
          <div className="challenge-container">
            <h1>Challenges</h1>
              {challenges.all_ids.map(id => (
                <ChallengeIndexItem challenge = {challenges.by_id[id]} key = {id} />
              ))}
          </div>
        </div>
      );
    } else {
      return null;
    }
   
  }
}