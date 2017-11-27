import React from 'react';
import TestIndexItem from './test_index_item';

export default class TestIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expandedTest: -1
    };
  }

  expanded(idx){
    return (this.state.expandedTest === idx) ? "expanded" : '';
  }

  toggleTestExpansion(idx){
    if (this.state.expandedTest === idx){
      this.setState({expandedTest: -1});
    } else{
      this.setState({expandedTest: idx});
    }
  }

  render(){
    return (
      <section className= "tests-container">
        {this.props.tests.map((test, idx)=>(
          <TestIndexItem
            key = {test.id}
            test= {test}
            testNum = {idx}
            taskInputs = {this.props.task_inputs}
            expanded = {this.expanded(idx)}
            toggle= {()=>(this.toggleTestExpansion(idx))}
          />
        ))}
      </section>
    );
  }
}
