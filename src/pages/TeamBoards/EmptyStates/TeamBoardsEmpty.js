import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import TeamBoardsSally from "../../../assets/TeamBoardsSally.jpg";
import NewTeamBoardModal from "../../../components/NewTeamBoardModal/NewTeamBoardModal";
import "./TeamBoardsEmpty.css";
import { connect } from "react-redux";

const TeamBoardsEmpty = (props) => {
  // console.log(props.selectedTeam);

  return (
    <div>
      <div className="teamboardsempty-title">
        <span>{props.selectedTeam.team}</span>
        <HiOutlineUserGroup />
      </div>
      <div style={{ color: "#80848D", fontSize: "90%" }}>
        teamsboards / {props.selectedTeam.team}
      </div>
      <div className="teamboardsempty-image">
        <center>
          <img src={TeamBoardsSally} alt="empty" />
        </center>
      </div>
      <div className="teamboardsempty-info">
        <center>
          <h4>No boards created</h4>
          <p>Let's make one for your team</p>
          <NewTeamBoardModal />
        </center>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    // selectedTeam: state.SelectedTeam.selectedTeam.team,
    selectedTeam: state.SelectedTeam.selectedTeam,
  };
};
export default connect(mapStateToProps)(TeamBoardsEmpty);
