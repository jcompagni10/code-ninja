import React from 'react';
import {Link} from 'react-router-dom';
import {Glyphicon} from 'react-bootstrap';

export default ({levelSets, tasks, curTask, fetchLevelSets})=>{
  if (levelSets){
  let url = "/arcade";
  let text ="Arcade";
  let curleveLSet = levelSets[curTask.level_set_id];
  let nextTask = curleveLSet.tasks[curTask.order];
  if (nextTask){
    url = "/arcade/repl/" + nextTask.id;
    text = "Next Level";
  }
  return (
    <Link to={url} className="next-task-btn">
    {text}
    <Glyphicon glyph="chevron-right"/>
    </Link>
  );
  } else{
  fetchLevelSets();
  return null;
  }

};
