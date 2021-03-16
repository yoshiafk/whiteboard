import { React, useEffect } from "react";
import { connect } from "react-redux";
import TeamBoardsEmpty from "./EmptyStates/TeamBoardsEmpty";
import TeamBoards from "./TeamBoardsFrontPage/TeamBoards";
import { getBoard } from "../../redux/BoardList/boardListActions";
import { getTeam } from "../../redux/TeamList/teamListActions";

const TeamBoardsIndex = (props) => {
  // useEffect(() => {
  //   props.getBoard(null, localStorage.getItem("token"));
  // }, [props.boardListReducer]);

  // useEffect(() => {
  //   props.getTeam(localStorage.getItem("token"));
  // }, [props.teamListReducer]);
  // const filteredboardList = props.boardList.filter((x) =>
  //   x.teamId.includes(props.selectedTeam.id)
  // );

  // console.log(props.selectedTeam);

  // console.log(props.selectedTeam);
  // console.log(props.projectnames.filter((x) => x.team == props.selectedTeam));

  // const filteredProject = props.projectnames.filter(
  //   (x) => x.team === props.selectedTeam
  // );

  // useEffect(() => {
  //   props.getBoard(props.selectedTeam.id, localStorage.getItem("token"));
  // }, [props.selectedTeam]);

  // console.log(props.boardList);
  // console.log(props.selectedTeam);
  // const selected_team_board = props.boardList.filter((x) =>
  //   x.teamId.includes(props.selectedTeam.id)
  // );

  // console.log(props.filteredboardList);

  // console.log(selected_team_board);

  //Utk cari warna team di project data ala2
  // const filteredTeam = props.projects.filter(
  //   (x) => x.team === props.selectedTeam
  // );
  // console.log(filteredTeam);
  // const filteredTeamColor = filteredTeam.color; FDF1CB
  // const teamSearchColor = filteredTeam.find((y) => y.color);

  // const teamSearchColor = "#FDF1CB";
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
  // console.log(teamSearchColor);
  // const teamColor = teamSearchColor;

  // console.log(teamSearchColor.color);

  // if (filteredProject.length < 1) {
  //   console.log("not found");
  // } else {
  //   console.log(filteredProject);
  // }

  return (
    <div>
      <div
        style={{
          marginLeft: "1px",
          height: "2vh",
          width: "99.9%",
          // width: "106vw",
          backgroundColor: `${teamColor}`,
        }}
      ></div>
      <div style={{ marginTop: "30px", marginLeft: "40px" }}>
        {props.filteredboardList.length < 1 ? (
          <TeamBoardsEmpty />
        ) : (
          <TeamBoards
          // filteredTeam={filteredTeam}
          />
        )}
        {/* <TeamBoards /> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTeam: state.SelectedTeam.selectedTeam,
    // projects: state.TeamList.projects,
    // projectnames: state.ProjectsPerTeam.projectnames,
    // filteredboardList: state.boardListReducer.boardList,
    filteredboardList: state.boardListReducer.boardList.filter((x) =>
      x.teamId.includes(state.SelectedTeam.selectedTeam.id)
    ),
    // boardList: state.boardListReducer.boardList,
    // teamList: state.teamListReducer.teamList,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getBoard: (team_id, token) => dispatch(getBoard(team_id, token)),
    getTeam: (token) => dispatch(getTeam(token)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(TeamBoardsIndex);
