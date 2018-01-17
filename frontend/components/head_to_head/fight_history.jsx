import React from 'react';

export default ({history}) => {
  if (history && history.length !== 0) {
    return (
      <div className = "history-container">
        <div className ="fight-history-title">
        History
        </div>
        <table className ="fight-table">
          <thead>
            <td>
              Date
            </td>
            <td>
              Opponent
            </td>
            <td>
              Result
            </td>
            <td>
              Your Time
            </td>
            <td>
              Opponent Time
            </td>
          </thead>
        {history.map(fight => (
          <tr key = {fight.id}>
            <td>
              {fight.date}
            </td>
            <td className="fight-opponent">
              {fight.opponent}
            </td>
            <td>
              {fight.win ? 
                (<span className ="win">Win</span>) :
                <span className ="loss">Loss</span> 
              }
            </td>
            <td>
              {fight.user_time}
            </td>
            <td>
              {fight.opponent_time}
            </td>
          </tr>
        )
        )}
        </table>
      </div>
    );
  }
  return null;
};
 
