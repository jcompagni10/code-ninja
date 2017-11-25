import React from 'react';

export default class REPL extends React.Component{

  componentDidMount(){
    this.props.fetchTask();
  }

  componentDidReceiveProps(){
    this.render();
  }

  render(){
    if (!this.props.task.title) return <h1>loading</h1>;
    return (
      <section className="repl_container">
        <h1> REPL FOR {this.props.task.title}</h1>
      </section>

    );
  }
}
