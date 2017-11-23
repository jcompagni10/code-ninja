import React from 'react';
import {Dropdown, Glyphicon, MenuItem} from 'react-bootstrap';


export default class Navbar extends React.Component{
  constructor(props){
    super(props);
    this.logout = this.props.logout;
    this.state= {
      navDropdownOpen: false,
      userDropdownOpen: true
    };
  }

  toggleNavDropdown(state = true){
     this.setState({navDropdownOpen: state});
   }

  toggleUserDropdown(state = true){
     this.setState({userDropdownOpen: state});
   }



   render(){
    return(
    
      <header className="navbar-fixed-top navbar row">
        <div className="col-sm-6">
          <ul className="navbar-items navbar-left">
            <li className= "navbar-item">
              <Dropdown id="nav-dropdown" open={this.state.navDropdownOpen} onToggle={this.toggleNavDropdown.bind(this)}>
                <Glyphicon bsRole= "toggle" glyph =""/>
                <div className="logo-wrapper" onMouseEnter={()=>(this.toggleNavDropdown())}>
                  <Glyphicon bsRole="toggle" className= "nav-logo" glyph="equalizer" bsSize="lg" />
                </div>
                <Dropdown.Menu className="nav-dropdown" onMouseLeave={()=>(this.toggleNavDropdown(false))}>
                <MenuItem>
                  <Glyphicon glyph="king" bsSize="lg" />
                  Arcade
                </MenuItem>
                <MenuItem>
                  <Glyphicon glyph="hourglass" bsSize="lg" />
                  Bots
                </MenuItem>
                <MenuItem>
                  <Glyphicon glyph="fire" bsSize="lg" />
                  Challenge
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
        </ul>
      </div>
      <div className="col-sm-6">
        <ul className="navbar-items navbar-right ">
          <li className="navbar-item">
            <div className= "user-score-container">
              <Glyphicon glyph="bitcoin" className= "coin" bsSize="lg" />
                <span class="user-score">
                  {this.props.currentUser.score}
                </span>
            </div>
          </li>
          <li className="navbar-item">
            <Glyphicon glyph="bell" bsSize="lg" />
          </li>
          <li className= "navbar-item">
            <Dropdown open={this.state.userDropdownOpen} onToggle={this.toggleUserDropdown.bind(this)}>
              <Glyphicon bsRole= "toggle" glyph =""/>
              <div className="user-dropdown-toggle" onClick={()=>(this.toggleUserDropdown())}>
                <div className="profile-thumb-round">
                  <img src={this.props.currentUser.img_url} />
                </div>
                <Glyphicon glyph="chevron-up" className="user-dropdown-chevron" bsSize="lg" />
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
    </header>
    );
  }
}
