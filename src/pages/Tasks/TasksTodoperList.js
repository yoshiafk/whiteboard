import React from "react";
import "./TasksTodoperList.scss";

export default function TasksTodoperList(props) {
  return (
    <div className="taskstodoperlist-container">
      <div className="taskstodoperlist-head">
        <div className="taskstodoperlist-withcheckbox">
          <input
            type="checkbox"
            id="taskstodoperlist"
            name="todo"
            value="todo"
          />
          <span className="taskstodoperlist-head-title">{props.title}</span>
        </div>
        <span className="taskstodoperlist-head-due">{props.dueDate}</span>
      </div>

      <div className="taskstodoperlist-detail">
        <span className="taskstodoperlist-detail-type">
          {props.boardId.title}
        </span>
        <span>
          <li>{props.teamId.teamName}</li>
        </span>
      </div>
    </div>
  );
}
