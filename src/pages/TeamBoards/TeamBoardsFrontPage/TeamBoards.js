import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import TeamBoardsCards from "../../../components/Cards/TeamBoardsCards/TeamBoardsCards";
import "./TeamBoards.scss";
import { connect } from "react-redux";

const TeamBoards = (props) => {
  return (
    <div>
      <div className="teamboards-title">
        <span>{props.selectedTeam}</span>
        <HiOutlineUserGroup />
      </div>
      <div style={{ color: "#80848D", fontSize: "90%" }}>
        Boards / {props.selectedTeam}
      </div>
      <div>
        <TeamBoardsCards />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedTeam: state.SelectedTeam.selectedTeam.team,
  };
};
export default connect(mapStateToProps)(TeamBoards);
