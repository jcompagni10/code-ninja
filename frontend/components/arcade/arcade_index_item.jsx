import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import {Link} from 'react-router-dom';
export default ({indexItem})=>(
  <div className="col-xs-12 sub-nav-item-container">
  <div className="sub-nav-item">
    <div className="sub-nav-item-top">
    <img className ="top-nav-item-image" src={`/assets/${indexItem.image_url}`} />
    <div className="sub-nav-item-title-container">
      <span className="sub-nav-item-title">{indexItem.name}</span>
      <div className={`completed-circle ${indexItem.completed? 'completed':""}`} >
      <Glyphicon glyph="ok" className= "check-mark" bsSize="lg" />
      </div>
    </div>
    </div>
    <div className="sub-nav-item-bottom">
    {indexItem.tasks.map((task,idx)=>(
      <Link key ={task.id} to ={`/arcade/repl/${task.id}`}>
      <div className={`task-circle ${task.completed? 'completed':""}`}>
        <span>{idx + 1 }</span>
      </div>
      </Link>
    ))}
    </div>
  </div>
  </div>
);
