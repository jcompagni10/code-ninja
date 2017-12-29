import React from 'react';
import UserIndexItem from './user_index_item';

export default class ChallengeIndex extends React.Component {
  constructor(){
    super();
    this.state = {
      search: ""
    };
  }


  handleInput(e){
    let query = e.currentTarget.value;
    this.setState({search: query});
    this.props.fetchUsers(query);
  }
  
  render(){
    return (
      <div className="h2h-content row">
        <div className="h2h-container">
          <h1>Head To Head</h1>
          <div className ="search-container">
            <input 
              value = {this.state.search}
              onChange = {(e)=>this.handleInput(e)}
              type="text" 
              className= "user-searchbar"/>
          </div>
          <ul className ="search-results">
            {this.props.users.map(user =>(
              <UserIndexItem user = {user} />
            ))}
          </ul>  
        </div>
      </div>
    ); 
  }
}