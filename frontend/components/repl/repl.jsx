import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
import TestIndexContainer from './tests/test_index_container';
import {Link} from 'react-router-dom';
import FightModalContainer from './fight_modal_container';
import {Route} from 'react-router-dom';
require('codemirror/mode/ruby/ruby');

export default class REPL extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      userCode: "",
      currentTestWindow: "tests",
      testState: "",
      submitDisabled: false,
      //ONLY FOR FIGHT MODE
      modalVisible: false,
      modalType: "start"
    };

    this.codeMirrorOptions = {
			lineNumbers: true,
      mode: 'ruby',
      theme: "monokai"
		};
    this.timer = null;
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
    this.props.fetchLevelSets(props.match.params.taskId);
    this.reset(props.task.function_skeleton);
    this.setState({testState: ""});
  }

  // TODO: clean this shit up
  componentWillReceiveProps(newProps){
    if (newProps.match.params.taskId !== this.props.match.params.taskId){
      this.resetTask(newProps);
    }
    if (this.props.task.id && newProps.task.id !== this.props.task.id){
      this.resetTask(newProps);
    }
    if(newProps.passedTests === true){
      this.setTestState("passed");
      if (this.props.match.params.mode === "bots"){
        this.fightOver(true);
      }
    }
    if(newProps.passedTests === false){
      this.setTestState("failed");
    }
    if (newProps.fights.timerVisible && this.timer === null ){
      this.setFightTimer(newProps);
    }
    if(newProps.match.params.mode === "bots" && !newProps.fightInProgresss){
      this.setState({modalVisible: true});
    }
  }


  setFightTimer(props){
    this.timer = setTimeout(
      ()=>{
        this.handleSubmit.apply(this);
        this.setState({submitDisabled: true});
        this.setState({modalVisible: true});
        this.fightOver(false);
      },
      props.fights.timeLimit);
  }

  fightOver(win){
    clearInterval(this.timer);
    this.setState({
      modalType: win ? "win" :"lose",
      modalVisible: true
    });
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
        <Link to={url} className="next-task-btn">
          {text}
          <Glyphicon glyph="chevron-right"/>
        </Link>
      );
    }
  }

  closeModal(){
    this.setState({modalVisible: false});
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
      mode: this.props.match.params.mode,
      fight_id: this.props.fights.fightId,
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
              className="code-submit-btn"
              disabled = {this.state.submitDisabled} >
              submit
            </button>
            {this.nextLevel()}
          </footer>
        </section>
        <FightModalContainer
          modalVisible = {this.state.modalVisible}
          type={this.state.modalType}
          closeModal ={this.closeModal.bind(this)}/>
      </section>

    );
  }
}
