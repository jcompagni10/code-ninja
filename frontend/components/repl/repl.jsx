import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import TestIndexContainer from './tests/test_index_container';
import {Link} from 'react-router-dom';
require('codemirror/mode/ruby/ruby');

export default class REPL extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userCode: "",
      currentTestWindow: "tests"
    };

    this.codeMirrorOptions = {
			lineNumbers: true,
      mode: 'ruby',
      theme: "monokai"
		};
  }

  // TODO: this is not right maybe?
  setCodeMirror(ref){
    if (!this.codeMirror) this.codeMirror = ref.getCodeMirror();
  }

  componentWillReceiveProps(newProps){
    if (newProps.match.params.taskId !== this.props.match.params.taskId){
      this.props.fetchTask(newProps.match.params.taskId);
      this.props.fetchLevelSets(newProps.match.params.taskId);
    }
    if (this.props.task.id && newProps.task.id !== this.props.task.id){
      this.reset(newProps.task.function_skeleton);
    }
  }
  nextLevel(){
    if (this.props.levelSets.by_id){
      let url = "/arcade";
      let text ="Arcade";
      let curTask = this.props.task;
      let curleveLSet = this.props.levelSets.by_id[curTask.level_set_id];
      let nextTask = curleveLSet.tasks[curTask.order];
      if (nextTask){
        url = "/arcade/repl/" + nextTask.id;
        text = "Next Level";
      }
      return (
        <Link to={url}>
          {text}
        </Link>
      );
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
    this.props.fetchLevelSets();
  }

  testPaneSelected(pane){
    if (this.state.currentTestWindow === pane){
      return "selected";
    }
  }

  handleSubmit(){
      const solution = {
      task_id: this.props.task.id,
      mode: this.props.mode,
      // TODO: sketchy? trying to solve error on submit before anything typed
      solution: this.state.userCode || this.props.task.function_skeleton
    };
    this.props.submitSolution(solution);
  }

  render(){
    let task = this.props.task;
    if (!task.title) return <h1>loading</h1>;
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
              onClick={()=>this.reset()}
            >
              <Glyphicon glyph="repeat"/>
            </div>
          </header>
          <section className="repl">
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
                  className= {`${this.testPaneSelected("tests")}`}>
                  tests
                </li>
                <li>
                  console
                </li>
            </ul>
          <TestIndexContainer />
          </section>
          <footer className="task-footer right-footer">
            <button
              onClick={this.handleSubmit.bind(this)}
              className="code-submit-btn">
              submit
            </button>
            {this.nextLevel()}
          </footer>
        </section>
      </section>

    );
  }
}
