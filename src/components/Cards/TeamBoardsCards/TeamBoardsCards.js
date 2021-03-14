import React from "react";
import TeamBoardsCard from "./TeamBoardsCard";
import "./TeamBoardsCards.scss";
import NewTeamBoardModal from "../../NewTeamBoardModal/NewTeamBoardModal";
import { connect } from "react-redux";
import { selectBoard } from "../../../redux/SelectedBoard/SelectedBoardAction";
import { Link } from "react-router-dom";

const TeamBoardsCards = (props) => {
  let projectnames = props.filteredboardList;
  console.log("boardlist", props.boardList);

  return (
    <div className="TeamBoardsCards-container">
      <span className="TeamBoardsCards-cardcontainer">
        {projectnames.map((projectname) => (
          <Link
            to="/details"
            onClick={() => {
              props.selectBoard(projectname.title, projectname._id);
            }}
            style={{ textDecoration: "none" }}
          >
            <TeamBoardsCard key={projectname._id} {...projectname} />
          </Link>
        ))}
        <NewTeamBoardModal />
      </span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // projectnames: state.ProjectsPerTeam.projectnames,
    boardList: state.boardListReducer.boardList,
    // filteredboardList: state.boardListReducer.boardList,
    filteredboardList: state.boardListReducer.boardList.filter((x) =>
      x.teamId.includes(state.SelectedTeam.selectedTeam.id)
    ),
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    selectBoard: (board, id) => dispatch(selectBoard(board, id)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(TeamBoardsCards);
