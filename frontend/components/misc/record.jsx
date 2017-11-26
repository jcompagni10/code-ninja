import React from 'react';

const dataTitle={
  head_to_head: ["wins", "losses", "ties"],
  bots: ["wins", "losses", "ties"],
};

export default ({data, type})=>{
  console.log(dataTitle[type]);
  return (

    <div className ="nav-item-data nav-item-record">
      {data.map((record, idx)=>(
        <div key = {idx} className="record-item">
          <span className="record">
            {record}
          </span>
          <br/>
          <span className="record-title">
            {dataTitle[type][idx]}
          </span>
        </div>
      ))}
    </div>
  );
};