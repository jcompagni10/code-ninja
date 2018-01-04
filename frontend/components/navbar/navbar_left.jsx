import React from "react";
import { Dropdown, Glyphicon, MenuItem } from "react-bootstrap";

export default ({ state }) => (
  <ul className="navbar-items navbar-left">
    <li className="navbar-item">
      <Dropdown
        id="nav-dropdown"
        open={this.state.navDropdownOpen}
        onToggle={this.toggleNavDropdown.bind(this)}
      >
        <Glyphicon bsRole="toggle" glyph="" />
        <Link to="/">
          <div
            className="logo-wrapper"
            onMouseEnter={() => this.toggleNavDropdown()}
          >
            <Glyphicon className="nav-logo" glyph="equalizer" bsSize="lg" />
          </div>
        </Link>
        <Dropdown.Menu
          className="nav-dropdown"
          onMouseLeave={() => this.toggleNavDropdown(false)}
        >
          <MenuItem href="/#/arcade">
            <Glyphicon glyph="king" bsSize="lg" />
            Arcade
          </MenuItem>
          <MenuItem href="/#/bots">
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
      <Glyphicon glyph="star" className="leaders-icon" bsSize="lg" />
      leaders
    </li>
  </ul>
);
