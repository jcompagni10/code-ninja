import React from 'react';
import {Link} from 'react-router-dom';

export default (props)=>(
  <div className="nav-item-container col-md-6 col-sm-12">
    <Link to={props.type}>
      <div className="nav-item">
        <div className="nav-item-top">
          <img className="nav-item-image" src={`assets/${props.type}`} />
          <div className="nav-item-description">
            <h1>{props.type.split("_").join(" ")}</h1>
            <p>{props.description}</p>
          </div>
        </div>
        <div className="nav-item-data-container">

            {props.dataDisplay}
        </div>
      </div>
    </Link>
  </div>
);
