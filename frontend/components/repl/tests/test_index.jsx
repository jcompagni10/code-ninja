import React from 'react';
import TestIndexItem from './test_index_item';
import {Glyphicon} from 'react-bootstrap';
export default class TestIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      expandedTest: -1,
      loading: true
    };
  }

  componentWillReceiveProps(){
    this.setState({expandedTest: -1});
  }

  expandedContainer(idx){
    return (this.state.expandedTest === idx) ? "expanded" : '';
  }

  passingTests(){
    let passing = 0;
    this.props.tests.forEach(test=>{
      if (test.passed) passing += 1;
    });
    return [passing, this.props.tests.length];
  }

  topText(){
    const errors = this.props.errors;
    if (errors.error){
      return (
        <div className="error-message">
          <Glyphicon glyph ="alert"/>
          <span className="bold">
            Error: </span>
          {" "+errors.error_message}
        </div>
      );
    }


    const passingTests = this.passingTests();
    if (passingTests[0] === passingTests[1]){
      return (
        <div className="passing-message">
          <Glyphicon glyph="ok" className="test-passed"/>
            <span className="bold">
              {passingTests[0]+"/"+passingTests[1] + " "}
            </span>
           All tests passed
        </div>
      );
    } if (this.props.tests[0].passed === false){
      return (
        <div className="failing-message">
          <Glyphicon glyph="alert"/>
          <span className="bold">
            {passingTests[0]+"/" + passingTests[1] + " "}
          </span>
             Answer to one or more tests is incorrect
        </div>
      );
    }
  }

  toggleTestExpansion(idx){
    if (this.state.expandedTest === idx){
      this.setState({expandedTest: -1});
    } else{
      this.setState({expandedTest: idx});
    }
  }


  render(){
    if (this.props.loading){
      return(
        <div class="loader">Loading...</div>
      );
    } else
    return (
      <section className= "tests-container ">
        <div className ="test-message">
          {this.topText()}
        </div>
        {this.props.tests.map((test, idx)=>(
          <TestIndexItem
            key = {test.id}
            test= {test}
            testNum = {idx}
            taskInputs = {this.props.task_inputs}
            expanded = {this.expandedContainer(idx)}
            toggle= {()=>(this.toggleTestExpansion(idx))}
          />
        ))}
      </section>
    );
  }
}
