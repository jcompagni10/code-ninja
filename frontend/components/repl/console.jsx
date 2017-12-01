import React from 'react';
import {Glyphicon} from 'react-bootstrap';

export default ({log, errors, loading})=>{
  if (loading){
    return(
      <div class="loader">Loading...</div>
    );
  } else {
    return(
      <div className ="console-container">
      {(errors.error_message)?
        (
          <div className="error-message">
            <Glyphicon glyph ="alert"/>
            <span className="bold">
              Error: </span>
            {" "+errors.error_message}
          </div>
        ) :
        (
          <div className="console-log" dangerouslySetInnerHTML=
            {{__html: log}} />
        )
      }
      </div>
    );
  }
};
