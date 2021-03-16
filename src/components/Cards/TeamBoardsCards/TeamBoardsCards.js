import React, { useEffect, useState } from "react";
import TeamBoardsCard from "./TeamBoardsCard";
import "./TeamBoardsCards.scss";
import NewTeamBoardModal from "../../NewTeamBoardModal/NewTeamBoardModal";
import { connect } from "react-redux";
import { selectBoard } from "../../../redux/SelectedBoard/SelectedBoardAction";
import { Link } from "react-router-dom";
import { getTodos } from "../../../redux/Todos/TodosAction";

const TeamBoardsCards = (props) => {
  let projectnames = props.filteredboardList;
  // console.log("boardlist", props.boardList);

  const [num_Todos, setnumTodos] = useState(props.filteredTodos.length);
  useEffect(() => {
    setnumTodos(props.filteredTodos.length);
    return;
  }, [num_Todos]);

  useEffect(() => {
    let teamList_id = [];

    for (let i = 0; i < props.teamList.length; i++) {
      teamList_id.push(props.teamList[i]._id);
    }

    props.getTodos(teamList_id);
  }, [props.Todos]);

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
    filteredTodos: state.Todos.todos,
    teamList: state.teamListReducer.teamList,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    selectBoard: (board, id) => dispatch(selectBoard(board, id)),
    getTodos: (teamList_id) => dispatch(getTodos(teamList_id)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(TeamBoardsCards);
