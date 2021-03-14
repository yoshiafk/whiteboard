import React from "react";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./TeamsList.scss";
import { connect } from "react-redux";
import { togglesideBarLoc } from "../../redux/SideBarLoc/sideBarLocAction";
import { selectTeam } from "../../redux/SelectedTeam/SelectedTeamAction";

const TeamsList = (props) => {
  let linkClassName = "TeamList-link-name";
  let linkClassActiveName = "TeamList-link-name active";

  return (
    <Link
      to={{ pathname: `/teamsboards/${props.teamName}` }}
      style={{ textDecoration: "none" }}
      onClick={() => {
        props.selectTeam(props.teamName, props._id);
        props.togglesideBarLoc(props.teamName);
      }}
    >
      <div
        style={{ marginBottom: "10px" }}
        className={
          props.sideBarLoc === props.teamName
            ? linkClassActiveName
            : linkClassName
        }
      >
        <HiOutlineUserGroup />
        <span style={{ cursor: "pointer" }}>{props.teamName}</span>
      </div>
    </Link>
  );
};

const mapStateToProps = (state) => {
  return {
    sideBarLoc: state.sideBarLoc.sideBarLoc,
    selectedTeam: state.SelectedTeam.selectedTeam,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    togglesideBarLoc: (location) => dispatch(togglesideBarLoc(location)),
    selectTeam: (team, id) => dispatch(selectTeam(team, id)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(TeamsList);
