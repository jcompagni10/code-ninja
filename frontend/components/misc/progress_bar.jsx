import React from 'react';

const dataDescription={
  arcade: " tasks solved",
  bots: " bots beaten",
  challenges: " challenges completed"
};

export default ({data, type})=>{
  return (
    <div className ="nav-item-data">
      <div className="data-title">
        {data[0]}/{data[1]}
        {dataDescription[type]}
      </div>
      <div className="progress-bar-outer" >
        <div className="progress-bar-inner"
          style={{width: (data[0]/data[1]*100)+"%"}}>
        </div>
      </div>
    </div>
  );
};
