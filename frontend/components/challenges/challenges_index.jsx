import React from 'react';

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
                <div className="bot-content row">
                    <div className="bot-container">
                    <h1>Bots</h1>
                        {challenges.all_ids.map(id => (
                            <h2 key = {id}>{challenges.by_id[id].title} </h2>
                        ))}
                    </div>
                </div>
            );
        } else {
            return null
        }
     
    }
}