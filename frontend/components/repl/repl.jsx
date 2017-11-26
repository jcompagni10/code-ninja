import React from 'react';
import {Glyphicon} from 'react-bootstrap';
import CodeMirror from 'react-codemirror';
require('codemirror/mode/ruby/ruby');

export default class REPL extends React.Component{
  constructor(props){
    super(props);
    this.state = {userCode: "def fxn"};
    this.codeMirrorOptions = {
			lineNumbers: true,
      mode: 'ruby',
      theme: "monokai"
		};
  }

  updateCode(newCode) {
    this.setState({
      userCode: newCode,
    });
  }

  componentDidMount(){
    this.props.fetchTask();
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
            <p className= "exmaple">
              {task.example}
            </p>
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
                    <span className="code">
                      {input.constraints}
                    </span>
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
          <footer class="task-footer"/ >
        </section>
        <section className="right-pane">
          <header className="task-header header-right">
            <div className="file-name pull-left">
              code.rb
            </div>
            <div className="reset pull-right">
              <Glyphicon glyph="repeat"/>
            </div>
          </header>
          <section className="repl">
          <CodeMirror
            value={this.state.userCode}
            onChange={this.updateCode.bind(this)}
            options={this.codeMirrorOptions} />
          </section>
        </section>
      </section>

    );
  }
}
