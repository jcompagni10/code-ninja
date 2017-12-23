import React from 'react';
import {Dropdown, Glyphicon, MenuItem} from 'react-bootstrap';
import {Route, Link} from 'react-router-dom';
import TimerContainer from '../misc/timer_container';

export default class Navbar extends React.Component{
  constructor(props){
  super(props);
  this.logout = this.props.logout;
  this.state= {
    navDropdownOpen: false,
    userDropdownOpen: false
  };
  }

  toggleNavDropdown(state = true){
   this.setState({navDropdownOpen: state});
   }

  toggleUserDropdown(state = true){
   this.setState({userDropdownOpen: state});
   }

   inREPL(){
   return this.props.location.pathname.includes("repl");
   }

   backButton(){
   const mode = this.props.match.params.mode;
   return (
   <Link to={"/"+mode}>
     <Glyphicon glyph="chevron-left"/>
     {mode.split("_").join(" ")}
   </Link> );
   }

   render(){
  return(

    <header className="navbar-fixed-top navbar row">
    <div className="col-sm-6">
      {(this.inREPL()) ?
      (<ul className="navbar-items navbar-left">
        <li className="nav-bar-item back-btn">{this.backButton()}</li>
      </ul> ) :
        (
        <ul className="navbar-items navbar-left">
        <li className= "navbar-item">
        <Dropdown id="nav-dropdown" open={this.state.navDropdownOpen} onToggle={this.toggleNavDropdown.bind(this)}>
          <Glyphicon bsRole= "toggle" glyph =""/>
          <Link to ="/">
          <div className="logo-wrapper" onMouseEnter={()=>(this.toggleNavDropdown())}>
            <Glyphicon className= "nav-logo" glyph="equalizer" bsSize="lg" />
          </div>
          </Link>
          <Dropdown.Menu className="nav-dropdown" onMouseLeave={()=>(this.toggleNavDropdown(false))}>
          <MenuItem href="/#/arcade">
          <Glyphicon glyph="king" bsSize="lg" />
          Arcade
          </MenuItem>
          <MenuItem href="/#/bots">
          <Glyphicon glyph="hourglass" bsSize="lg" />
          Bots
          </MenuItem>
          <MenuItem href = "/#/challenges">
          <Glyphicon glyph="fire" bsSize="lg" />
          Challenges
          </MenuItem>
          <MenuItem>
          <Glyphicon glyph="user" bsSize="lg" />
          Head to Head
          </MenuItem>
        </Dropdown.Menu>
        </Dropdown>
      </li>
      <li className="navbar-item">
        <Glyphicon glyph="star" className= "leaders-icon" bsSize="lg" />
        leaders
      </li>
      </ul>)
      }
    </div>
    <div className="col-sm-6">
    <ul className="navbar-items navbar-right ">
      <li className="navbar-item">
      <div className= "user-score-container">
        <Glyphicon glyph="bitcoin" className= "coin" bsSize="lg" />
        <span className="user-score">
          {this.props.currentUser.score}
        </span>
      </div>
      </li>
      <li className="navbar-item">
      <Glyphicon glyph="bell" className="notifications" bsSize="lg" />
      </li>
      <li className= "navbar-item">
      <Dropdown id="navbar" open={this.state.userDropdownOpen} onToggle={this.toggleUserDropdown.bind(this)}>
        <Glyphicon bsRole= "toggle" glyph =""/>
        <div className="user-dropdown-toggle pointer" onClick={()=>(this.toggleUserDropdown())}>
        <div className="profile-thumb-round">
          <img src={this.props.currentUser.img_url} />
        </div>
        <Glyphicon glyph="chevron-down" className="user-dropdown-chevron" bsSize="lg" />
        </div>
        <Dropdown.Menu className="user-dropdown" onMouseLeave={()=>(this.toggleNavDropdown(false))}>
        <div className ="user-info">
          <div className="profile-thumb-round">
          <img src={this.props.currentUser.img_url} />
          </div>
          <div className="username"> {this.props.currentUser.username}</div>
        </div>
        <MenuItem divider />
        <div className="menu-score-section">
        <div className="menu-nav-score-wrapper">
          <div className="score-container">
          <Glyphicon glyph="bitcoin" className= "coin" bsSize="lg" />
          {this.props.currentUser.score}
        </div>
        </div>
        </div>
        <MenuItem divider />
        <MenuItem>
        my profile
        </MenuItem>
        <MenuItem>
        badges
        </MenuItem>
        <MenuItem>
        settings
        </MenuItem>
        <MenuItem divider />
        <MenuItem onClick={this.logout}>
        sign out
        </MenuItem>

      </Dropdown.Menu>
      </Dropdown>
    </li>
    </ul>
    </div>
    <TimerContainer />
  </header>
  );
  }
}
