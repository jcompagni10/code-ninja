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
    let users = this.props.users;
    return (
      <div className="h2h-content row">
        <div className="h2h-container">
          <h1>Head To Head</h1>
          <div className ="search-container row">
            <div className="col-md-6">
              <label for ="user-search"> Search For An Opponent </label>
              <div className="form-group search-group">
                <input 
                  id = "user-search"
                  value = {this.state.search}
                  onChange = {(e)=>this.handleInput(e)}
                  type="text" 
                  placeholder="username"
                  className= "user-searchbar form-control"/>
                {(users.length > 0) ?
                (
                  <ul className ="search-results">
                  {this.props.users.map(user =>(
                    <UserIndexItem user = {user} />
                  ))}
                </ul>
                ) : null}
              </div>
            </div>
            <div className="col-md-6 random-op-button">
              <div className="challenge-button">
                <svg width="24" height="24" viewBox="0 0 24 24"><path d="M3.5 20.43c.93-.35 2.28-1.3 3.6-2.63l.33-.33 2 1.98c.35.36.94.36 1.3 0 .37-.37.37-.96 0-1.32-.36-.37-.95-.37-1.3 0L8.08 16.8l3.9-3.9 3.9 3.9-1.32 1.33c-.36-.37-.95-.37-1.32 0-.36.36-.36.95 0 1.32.37.36.96.36 1.32 0l2-1.98.32.33c1.32 1.32 2.67 2.28 3.6 2.63-.12.46 0 .97.36 1.33.55.55 1.43.55 1.98 0s.55-1.44 0-1.98c-.36-.36-.87-.5-1.33-.37-.34-.9-1.3-2.26-2.62-3.58l-.33-.33 1.98-2c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.32 0-.36.37-.36.96 0 1.32l-1.3 1.32-3.92-3.9 6-6c.25-.25 1.5-2.48 1-2.97-.5-.5-2.72.73-2.98 1l-6 6-6-6c-.26-.27-2.48-1.5-2.97-1-.5.5.74 2.72 1 2.97l6 6-3.92 3.9-1.3-1.32c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.33 0-.36.37-.36.96 0 1.32l1.98 2-.33.32c-1.32 1.32-2.28 2.67-2.63 3.6-.47-.13-.98 0-1.34.36-.55.54-.55 1.43 0 1.98s1.43.55 1.98 0c.36-.36.48-.87.37-1.33z"></path></svg>
                Random Opponent
              </div>
            </div>
          </div>
        </div>
      </div>
    ); 
  }
}