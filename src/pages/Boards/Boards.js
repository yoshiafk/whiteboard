import React from "react";
import { connect } from "react-redux";
import BoardsCard from "../../components/Cards/BoardsCards/BoardsCard";
import "./Boards.scss";
import { selectBoard } from "../../redux/SelectedBoard/SelectedBoardAction";
import { Link } from "react-router-dom";

const Boards = (props) => {
  let teams = props.teamList;
  let _teamlist = [];
  for (let i = 0; i < teams.length; i++) {
    _teamlist.push(teams[i]._id);
  }

  let filteredboard = props.boardList.filter((x) =>
    _teamlist.includes(x.teamId[0])
  );

  let projects = filteredboard;
  console.log("projects", projects);
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
  let teamColor = teamSearchColor();

  return (
    <div className="board-container">
      <h1 className="page-title">Board</h1>
      <div>
        {teams.map((team) => {
          teamColor = teamSearchColor();
          let filteredboard_n = filteredboard.filter((x) =>
            x.teamId.includes(team._id)
          );
          let num_of_boards = filteredboard_n.length;
          return (
            <div>
              {num_of_boards > 0 ? (
                <h1 className="board-title">{team.teamName}</h1>
              ) : null}
              <div className="board-content">
                {num_of_boards > 0
                  ? filteredboard_n.map((project) => {
                      return (
                        <Link
                          to="/details"
                          onClick={() => {
                            props.selectBoard(project.title, project._id);
                          }}
                          style={{ textDecoration: "none" }}
                        >
                          <div className="wrapper">
                            <BoardsCard
                              key={project._id}
                              {...project}
                              teamColor={teamColor}
                            />
                          </div>
                        </Link>
                      );
                    })
                  : null}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
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

export default connect(mapStateToProps, mapDispatchtoProps)(Boards);
