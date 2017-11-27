import React from 'react';
import {Glyphicon} from 'react-bootstrap';

export default ({test, taskInputs, testNum, expanded, toggle}) =>(
  <div className={"test-container " + expanded} >
    <div className ="test-title" onClick={toggle}>
      <Glyphicon glyph="play" className="toggle-test"/>
      Test {testNum + 1}
    </div>
    <div className ="test-results">
      <table>
        <tbody>
          <tr className="data-group">
            <td>
              Input:
            </td>
            <td>
              <span className="bold">
                {taskInputs[0].input_name}:
              </span>
             {test.inputs[0]}
            </td>
          </tr>
          {taskInputs.slice(1).map((taskInput, idx)=>(
            <tr key = {idx}>
              <td></td>
              <td>
                <span className="bold">
                  {taskInput.input_name}:
                </span>
                {test.inputs[idx+1]}
              </td>
            </tr>
          ))}
          <tr className="data-group">
            <td>
              Output:
            </td>
            <td className="user-output">
              {test.received || "Empty"}
            </td>
          </tr>
          <tr className="data-group">
            <td>
              Expected Output:
            </td>
            <td className="expected-output">
              {test.expected}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
