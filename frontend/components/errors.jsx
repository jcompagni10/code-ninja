import React from 'react';


export default class ErrorsList extends React.Component {

  componentWillReceiveProps(newProps){
    this.render();
  }

  render(){
    const errors = Object.values(this.props.errors);

    if (!errors[0]){
      return "";
    }
    return (
    // TODO: clean up
      <ul className="error-list alert-danger">
        {errors.map((error, idx)=>(
          <li key = {idx}>{error}</li>
        ))}
      </ul>
    );
  }
}
