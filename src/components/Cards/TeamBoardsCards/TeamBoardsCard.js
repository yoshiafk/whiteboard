import React from "react";
import { connect } from "react-redux";
import "./TeamBoardsCard.scss";

const TeamBoardsCard = (props) => {
  const filteredTeam = props.teamList.filter((x) => x._id === props._id);

  return (
    <div className="TeambBoardsCard-percardcontainer">
      <div className="TeamBoardsCard-projectname">{props.title}</div>
      <div className="TeamBoardsCard-teamname"> {filteredTeam.teamName} </div>
      <div className="TeamBoardsCard-activetasks">
        <div className="issues">Active Issues</div>
        <div className="number-container">
          <center className="number">-</center>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamList: state.teamListReducer.teamList,
  };
};

export default connect(mapStateToProps)(TeamBoardsCard);
