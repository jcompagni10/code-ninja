import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import TestIndexContainer from './tests/test_index_container';
import ConsoleContainer from './console_container';
import NextLevel from './next_level';
require('codemirror/mode/javascript/javascript');
require('codemirror/addon/edit/matchbrackets.js');
require('codemirror/addon/edit/closebrackets.js');

export default class REPL extends React.Component{
  constructor(props){
  super(props);
  this.state = {
    userCode: "",
    currentTestWindow: "tests",
    testState: "",
  };

  this.codeMirrorOptions = {
			lineNumbers: true,
    mode: 'javascript',
    theme: "monokai",
    extraKeys: {
    Tab: function(cm) {
      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
      cm.replaceSelection(spaces);
    }
    },
    matchBrackets: true,
    autoCloseBrackets: true
		};
  }

  setTestState(state){
  this.setState({testState: state});
  setTimeout(()=>this.setState({testState: ""}), 2000);
  }
  // TODO: this is not right maybe?
  setCodeMirror(ref){
  if (!this.codeMirror) this.codeMirror = ref.getCodeMirror();
  }

  resetTask(props){
  this.props.fetchTask(props.match.params.taskId);
  // this.props.fetchLevelSets(props.match.params.taskId);
  this.reset(props.task.function_skeleton);
  this.setState({testState: ""});
  }

  componentWillReceiveProps(newProps){
  // TODO: shouldn't need both of these
  if (newProps.match.params.taskId !== this.props.match.params.taskId){
    this.resetTask(newProps);
  }
  if (this.props.task.id && newProps.task.id !== this.props.task.id){
    this.resetTask(newProps);
  }
  if(newProps.passedTests === true){
    this.setTestState("passed");
  }
  if(newProps.passedTests === false){
    this.setTestState("failed");
  }

  }


  updateCode(newCode) {
  this.setState({
    userCode: newCode,
  });
  }

  reset(val = this.props.task.function_skeleton){
  this.codeMirror.setValue(val);
  }

  componentDidMount(){
  this.props.fetchTask(this.props.match.params.taskId);
  }

  testPaneSelected(pane){
  if (this.state.currentTestWindow === pane){
    return "selected";
  }
  }
  setPane(pane){
    this.setState({currentTestWindow: pane });
  }
  ready(){
  return this.props.task.title !== undefined;
  }

  handleSubmit(){
  let solution = this.state.userCode || this.props.task.function_skeleton;
  this.props.submit(solution);
  }

  render(){
  if (this.ready()){
    let task = this.props.task;
    return (
    <section className="repl_container">
      <section className="left-pane">
      <header className="task-header header-left">
        description
      </header>
      <section className="task-description">
        <p className="task-example">
         {task.description}
        </p>
        <h4>
        Example
        </h4>
        <p className= "example" dangerouslySetInnerHTML=
        {{__html: task.example}} />
        <h4>Input/Output</h4>
        <ul className="io-list">
        <li>
          <h4>
          [time limit] {task.time_limit}ms
          </h4>
        </li>
        {task.inputs.map(input=>(
          <li key = {input.id}>
          <h4>
            [input] {input.input_type} {input.input_name}
          </h4>
          <span className="input-constraints-label">
            Guaranteed constraints: <br/>
            <span className="code"
            dangerouslySetInnerHTML=
            {{__html: input.constraints}} />
          </span>
        </li>
        ))}
        <li>
          <h4>
          [output] {task.output_type}
          </h4>
          {task.output_description}
        </li>
        </ul>
      </section>
      <footer className="task-footer"/ >
      </section>
      <section className="right-pane">
      <header className="task-header header-right bottom-bar">
        <div className="file-name pull-left">
        code.rb
        </div>
        <div
        className="reset pull-right"
        onClick={()=>this.reset()} >
        <Glyphicon glyph="repeat"/>
        </div>
      </header>
      <section className="repl">
      <div className={"code-mirror-cover " + this.state.testState}>
        {this.state.testState}
      </div>
      <CodeMirror
        ref ={this.setCodeMirror.bind(this)}
        defaultValue={task.function_skeleton}
        value={this.state.userCode}
        onChange={this.updateCode.bind(this)}
        options={this.codeMirrorOptions} />
      </section>
      <section className ="tests">
        <ul className="tests-nav-bar bottom-bar">
          <li
          className= {`${this.testPaneSelected("tests")}`}
          onClick = {()=>this.setPane("tests")}>
            tests
          </li>
          <li
          className ={`${this.testPaneSelected("console")}`}
          onClick = {()=>this.setPane("console")} >
            console
          </li>
        </ul>
      {(this.state.currentTestWindow === "tests")?
        (<TestIndexContainer />) :
        (<ConsoleContainer />)
      }
      </section>
      <footer className="task-footer right-footer">
        <button
        onClick={this.handleSubmit.bind(this)}
        className="code-submit-btn" >
        submit
        </button>
        <NextLevel
        levelSets = {this.props.levelSets.by_id}
        tasks = {this.props.tasks}
        curTask = {this.props.task}
        fetchLevelSets = {this.props.fetchLevelSets}
        />
      </footer>
      </section>
    </section>
    );
  }
  else return null;
  }
}
