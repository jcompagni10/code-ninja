import React from "react";
import { Glyphicon } from "react-bootstrap";
import { Link } from "react-router-dom";
import Record from "../misc/record";

export default ({ indexItem }) => (
  <div className="col-xs-12 sub-nav-item-container">
    <div className="sub-nav-item">
      <div className="sub-nav-item-top">
        <div className="sub-nav-item-title-container">
          <span className="sub-nav-item-title">{indexItem.name}</span>
          <div
            className={`completed-circle ${
              indexItem.completed ? "completed" : ""
            }`}
          >
            <Glyphicon glyph="ok" className="check-mark" bsSize="lg" />
          </div>
        </div>
        <div className="bot-top-content">
          <img className="bot-image" src={`/assets/${indexItem.image_url}`} />
          <div className="bot-description">
            <p>{indexItem.description}</p>
          </div>
          <Link to={`/bots/repl/${indexItem.task_id}/${indexItem.id}`}>
            <div className="challenge-button">
              <svg width="24" height="24" viewBox="0 0 24 24">
                <path d="M3.5 20.43c.93-.35 2.28-1.3 3.6-2.63l.33-.33 2 1.98c.35.36.94.36 1.3 0 .37-.37.37-.96 0-1.32-.36-.37-.95-.37-1.3 0L8.08 16.8l3.9-3.9 3.9 3.9-1.32 1.33c-.36-.37-.95-.37-1.32 0-.36.36-.36.95 0 1.32.37.36.96.36 1.32 0l2-1.98.32.33c1.32 1.32 2.67 2.28 3.6 2.63-.12.46 0 .97.36 1.33.55.55 1.43.55 1.98 0s.55-1.44 0-1.98c-.36-.36-.87-.5-1.33-.37-.34-.9-1.3-2.26-2.62-3.58l-.33-.33 1.98-2c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.32 0-.36.37-.36.96 0 1.32l-1.3 1.32-3.92-3.9 6-6c.25-.25 1.5-2.48 1-2.97-.5-.5-2.72.73-2.98 1l-6 6-6-6c-.26-.27-2.48-1.5-2.97-1-.5.5.74 2.72 1 2.97l6 6-3.92 3.9-1.3-1.32c.36-.36.36-.95 0-1.32-.37-.36-.96-.36-1.33 0-.36.37-.36.96 0 1.32l1.98 2-.33.32c-1.32 1.32-2.28 2.67-2.63 3.6-.47-.13-.98 0-1.34.36-.55.54-.55 1.43 0 1.98s1.43.55 1.98 0c.36-.36.48-.87.37-1.33z" />
              </svg>
              challenge
            </div>
          </Link>
        </div>
      </div>
      <div className="sub-nav-item-bottom">
        <Record
          data={[indexItem.wins, indexItem.losses, indexItem.ties]}
          type="bots"
        />
      </div>
    </div>
  </div>
);
