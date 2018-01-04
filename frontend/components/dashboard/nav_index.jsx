import React from "react";
import NavIndexItem from "./nav_index_item";
import ProgressBar from "../misc/progress_bar";
import Record from "../misc/record";

export default ({ currentUser }) => (
  <div className="main-nav-content row">
    <div className="main-nav-container">
      <NavIndexItem
        type="arcade"
        description="Prepare for technical interviews using real interview questions from top companies"
        data={currentUser.progress.arcade}
        dataDisplay={
          <ProgressBar data={currentUser.progress.arcade} type="arcade" />
        }
      />
      <NavIndexItem
        type="head_to_head"
        description="Go Head-to-Head against your friends and strangers"
        data={currentUser.progress.arcade}
        dataDisplay={<Record data={[5, 3, 4]} type="head_to_head" />}
      />
      <NavIndexItem
        type="bots"
        description="Challenge engineers from top tech companies"
        data={currentUser.progress.arcade}
        dataDisplay={
          <ProgressBar data={currentUser.progress.bots} type="bots" />
        }
      />
      <NavIndexItem
        type="challenges"
        description="Solve exciting Daily and Weekly coding challenges"
        data={currentUser.progress.arcade}
        dataDisplay={<ProgressBar data={[45, 50]} type="challenges" />}
      />
    </div>
  </div>
);
