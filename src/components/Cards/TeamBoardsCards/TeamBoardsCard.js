import React from "react";
import { connect } from "react-redux";
import "./TeamBoardsCard.scss";

const TeamBoardsCard = (props) => {
  const filteredTeam = props.teamList.filter((x) => x._id === props._id);

  const banyak = props.todos.filter((x) => x.boardId._id === props._id).length;

  return (
    <div className="TeambBoardsCard-percardcontainer">
      <div className="TeamBoardsCard-projectname">{props.title}</div>
      <div className="TeamBoardsCard-teamname"> {filteredTeam.teamName} </div>
      <div className="TeamBoardsCard-activetasks">
        <div className="issues">Number of Tasks</div>
        <div className="number-container">
          <center className="number">{banyak}</center>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    teamList: state.teamListReducer.teamList,
    todos: state.Todos.todos,
    selectedBoard: state.SelectedBoard.selectedBoard,
  };
};

export default connect(mapStateToProps)(TeamBoardsCard);
