import React from 'react';
import {Link} from 'react-router-dom';

const dataDescription={
  arcade: " tasks solved",
  bots: " bots beaten"
};
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
          <div className ="nav-item-data">
            <div className="data-title">
              {props.data[0]}/{props.data[1]}
              {dataDescription[props.type]}
            </div>
            <div className="progress-bar-outer" >
              <div className="progress-bar-inner"
                style={{width: (props.data[0]/props.data[1]*100)+"%"}}>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  </div>
);
