import React from "react";
import REPLContainer from "../../repl/repl_container";

export default class BotFightController extends React.Component {
  submit(code) {
    const solution = {
      task_id: this.props.match.params.taskId,
      mode: "challenges",
      solution: code
    };
    this.props.submitSolution(solution);
  }

  render() {
    return <REPLContainer submit={this.submit.bind(this)} />;
  }
}
