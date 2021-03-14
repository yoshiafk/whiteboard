import React from "react";
import { connect } from "react-redux";
import BoardsCard from "./BoardsCard";
import "./BoardsCards.scss";
import { selectBoard } from "../../../redux/SelectedBoard/SelectedBoardAction";
import { Link } from "react-router-dom";

const BoardsCards = (props) => {
  let teams = props.teamList;
  let _teamlist = [];
  for (let i = 0; i < teams.length; i++) {
    _teamlist.push(teams[i]._id);
  }

  let filteredboard = props.boardList.filter((x) =>
    _teamlist.includes(x.teamId[0])
  );

  // let filteredlist = props.List.filter((x) =>
  //   filteredboard.includes(x.boardId[0])
  // );

  // let filteredcard = props.cardList.filter((x) =>
  //   filteredlist.includes(x.ListId[0])
  // );

  let projects = filteredboard;

  const teamSearchColor = () => {
    let o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };
  const teamColor = teamSearchColor();

  return (
    <div className="BoardsCards-container">
      {projects.slice(0, 3).map((project) => (
        <Link
          to="/details"
          onClick={() => {
            props.selectBoard(project.title, project._id);
          }}
          style={{ textDecoration: "none" }}
        >
          <BoardsCard key={project._id} {...project} teamColor={teamColor} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // projects: state.TeamList.projects,
    // projectnames: state.ProjectsPerTeam.projectnames,
    teamList: state.teamListReducer.teamList,
    boardList: state.boardListReducer.boardList,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    selectBoard: (board, id) => dispatch(selectBoard(board, id)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(BoardsCards);
