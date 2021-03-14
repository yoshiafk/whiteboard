import React, { useEffect } from "react";
import SideBar from "./Sidebar";
import { BiHomeAlt } from "react-icons/bi";
import { FiClipboard } from "react-icons/fi";
import { RiTaskLine } from "react-icons/ri";

import { Link } from "react-router-dom";
import "./SidebarIndex.scss";
import TeamsList from "./TeamsList";
import NewTeamModal from "../NewTeamModal/NewTeamModal";
import { connect, useSelector, useDispatch } from "react-redux";
import { togglesideBarLoc } from "../../redux/SideBarLoc/sideBarLocAction";
import { getTeam } from "../../redux/TeamList/teamListActions";

const SidebarIndex2 = (props) => {
  let linkClassName = "link-name";
  let linkClassActiveName = "link-name active";
  // let projects = props.projects;

  const dispatch = useDispatch();

  const { teamList } = useSelector((state) => state.teamListReducer);
  // useEffect(() => {
  //   dispatch(getTeam(localStorage.getItem("token")));
  // }, []);

  // console.log(teamList);

  return (
    <SideBar>
      <Link
        to="/home"
        className={
          props.sideBarLoc === "Home" ? linkClassActiveName : linkClassName
        }
        onClick={() => props.togglesideBarLoc("Home")}
      >
        <BiHomeAlt />
        <span>Home</span>
      </Link>

      <Link
        to="/boards"
        className={
          props.sideBarLoc === "Boards" ? linkClassActiveName : linkClassName
        }
        onClick={() => props.togglesideBarLoc("Boards")}
      >
        <FiClipboard />
        <span>Boards</span>
      </Link>

      <Link
        to="/tasks"
        className={
          props.sideBarLoc === "Tasks" ? linkClassActiveName : linkClassName
        }
        onClick={() => props.togglesideBarLoc("Tasks")}
      >
        <RiTaskLine />
        <span>Tasks</span>
      </Link>

      <center>
        <hr
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            marginLeft: "10px",
            marginRight: "10px",
            borderColor: "#C2C3C6",
          }}
        />
      </center>

      <div className="teams-title">
        <span>
          <div>TEAM</div>
          <NewTeamModal className="teams-title-plussign" />
        </span>
      </div>

      <div className="teams-lists">
        <div>
          {teamList
            .map((team) => <TeamsList key={team._id} {...team} />)
            .reverse()}
        </div>
      </div>
    </SideBar>
  );
};

const mapStateToProps = (state) => {
  return {
    sideBarLoc: state.sideBarLoc.sideBarLoc,
    // projects: state.TeamList.projects,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    togglesideBarLoc: (location) => dispatch(togglesideBarLoc(location)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(SidebarIndex2);
