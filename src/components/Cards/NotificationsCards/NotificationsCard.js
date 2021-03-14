import React from "react";
import { connect } from "react-redux";
import "./NotificationsCard.scss";

const NotificationsCard = (props) => {
  // const filteredTeam = props.projects.filter((x) => x.team === props.team);
  // const teamSearchColor = filteredTeam.find((y) => y.color);
  // const teamColor = teamSearchColor.color;

  return (
    <div
      className="NotifCard-container"
      style={{ backgroundColor: `${props.teamColor}` }}
    >
      <div className="NotifCard-content-container">
        <div className="NotifCard-container-projectname">{props.title}</div>
        <div className="NotifCard-container-projectteam">
          <div className="Notif-detail">
            <span className="Notif-type">{props.boardId.title}</span>
            <span className="Notif-team">
              <li> {props.teamId.teamName} </li>
            </span>
          </div>
          <div>{props.dueDate}</div>
        </div>
      </div>
    </div>
  );
};

export default NotificationsCard;
