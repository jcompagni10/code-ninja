import React from 'react';
import ChallengeIndexItem from './challenge_index_item';
<<<<<<< HEAD
=======


>>>>>>> 8610651

export default class ChallengeIndex extends React.Component {
  constructor(){
    super();
  }

  componentDidMount(){
    this.props.fetchChallenges()
  }
  
  render(){
    let challenges = this.props.challenges
    if (challenges.all_ids){
      return (
        <div className="challenge-content row">
          <div className="challenge-container">
            <h1>Challenges</h1>
              {challenges.all_ids.map(id => (
                <ChallengeIndexItem challenge = {challenges.by_id[id]} />
              ))}
          </div>
        </div>
      );
    } else {
      return null
    }
   
  }
}