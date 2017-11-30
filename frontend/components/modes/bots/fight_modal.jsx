import React from 'react';
import {Link} from 'react-router-dom';

export default class FightModal extends React.Component{
  constructor(props){
    super(props);
  }

  dynamicContent(){
    let content;
    if (this.props.status === "ready") {
      return (
        <div className="end-content">
          <div className="challenge-button"
            onClick={this.props.handleStart}>
            Let's Go!
          </div>
        </div>
     );
   } else if (["win", "loss"].includes(this.props.status)) {
     const result = (this.props.status === "win") ? "win" : "lose";
     return (
        <div className="end-content">
          <div className="fight-result">
            <span className = {result} >
              you {result}
            </span>
          </div>
          <Link to="/bots" className="challenge-button">
            Back To Bots
          </Link>
        </div>
       );
     }
  }


  render(){
    if (this.props.show){
      return(
        <div className= {"fight-modal"}>
          <div className="modal-cover">
            <div className="modal-container">
              <div className="half left-half">
                <div className= "profile-container">
                  <div className="profile-thumb-round">
                    <img src={this.props.currentUser.img_url} />
                  </div>
                  <div className="fighter-name">
                    {this.props.currentUser.username}
                  </div>
                </div>
              </div>
              <div className="half right-half">
                <div className= "profile-container">
                  <div className="fighter-name">
                    {this.props.opponentName}
                  </div>
                  <div className="profile-thumb-round">
                    <img src={"/assets/"+this.props.opponentImage} />
                  </div>
                </div>
              </div>
              <svg className ="swords" width="24" height="24" viewBox="0 0 24 24"><path d="M3.5 20.43c.93-.35 2.28-1.3 3.6-2.63l.33-.33 2 1.98c.35.36.94.36 1.3 0 .37-.37.37-.96 0-1.32-.36-.37-.95-.37-1.3 0L8.08 16.8l3.9-3.9 3.9 3.9-1.32 1.33c-.36-.37-.95-.37-1.32 0-.36.36-.36.95 0 1.32.37.36.96.36 1.32 0l2-1.98.32.33c1.32 1.32 2.67 2.28 3.6 2.63-.12.46 0 .97.36 1.33.55.55 1.43.55 1.98 0s.55-1.44 0-1.98c-.36-.36-.87-.5-1.33-.37-.34-.9-1.3-2.26-2.62-3.58l-.33-.33 1.98-2c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.32 0-.36.37-.36.96 0 1.32l-1.3 1.32-3.92-3.9 6-6c.25-.25 1.5-2.48 1-2.97-.5-.5-2.72.73-2.98 1l-6 6-6-6c-.26-.27-2.48-1.5-2.97-1-.5.5.74 2.72 1 2.97l6 6-3.92 3.9-1.3-1.32c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.33 0-.36.37-.36.96 0 1.32l1.98 2-.33.32c-1.32 1.32-2.28 2.67-2.63 3.6-.47-.13-.98 0-1.34.36-.55.54-.55 1.43 0 1.98s1.43.55 1.98 0c.36-.36.48-.87.37-1.33z"></path></svg>
              {this.dynamicContent()}
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}
