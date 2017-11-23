import React from 'react';
import NavIndexItem from './nav_index_item';

export default ({currentUser})=>(
  <div className="main-nav-content row">
    <div className="main-nav-container">
      <NavIndexItem
        type="arcade"
        description="Prepare for technical interviews using real interview questions from top companies"
        data={[5,10]}
      />
      <NavIndexItem
        type="head_to_head"
        description="Go Head-to-Head against your friends and strangers"
        data={[40,57]}
      />
      <NavIndexItem
        type="bots"
        description="Challenge engineers from top tech companies"
        data={[18,20]}
      />
      <NavIndexItem
        type="challenges"
        description="Solve exciting Daily and Weekly coding challenges"
        data={[20,20]}
      />
    </div>
  </div>
);
