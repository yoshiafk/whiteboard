import React, { useEffect } from "react";
import SidebarIndex from "../components/Sidebar/SidebarIndex";
import Navbar from "../components/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home/Home";
import "./ScreenIndex.scss";
import Boards from "./Boards/Boards";
import Tasks from "./Tasks/Tasks";
import TeamBoardsIndex from "./TeamBoards/TeamBoardsIndex";
import { connect } from "react-redux";
import { getBoard } from "../redux/BoardList/boardListActions";
import { getTeam } from "../redux/TeamList/teamListActions";
import { getTodos } from "../redux/Todos/TodosAction";
import TeamBoardDetails from "./BoardDetails/TeamBoardDetails";
import Account from "./Account/";

const ScreenIndex = (props) => {
  // const [boardList, setBoardList] = useState(props.boardList);
  // const [teamList, setTeamList] = useState(props.teamList);

  let contentClass = props.isOpen ? "content open" : "content";
  useEffect(() => {
    props.getBoard(null, localStorage.getItem("token"));
  }, [props.boardListReducer]);

  useEffect(() => {
    props.getTeam(localStorage.getItem("token"));
  }, [props.teamListReducer]);

  useEffect(() => {
    let teamList_id = [];

    for (let i = 0; i < props.teamList.length; i++) {
      teamList_id.push(props.teamList[i]._id);
    }

    props.getTodos(teamList_id);
  }, [props.teamList]);

  useEffect(() => {
    let teamList_id = [];

    for (let i = 0; i < props.teamList.length; i++) {
      teamList_id.push(props.teamList[i]._id);
    }

    props.getTodos(teamList_id);
  }, [props.Todos]);

  return (
    <Router>
      <Navbar />

      <div className="screenindex-container">
        <SidebarIndex />

        <div className={contentClass}>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/boards">
              <Boards />
            </Route>
            <Route path="/tasks">
              <Tasks />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/details">
              <TeamBoardDetails />
            </Route>
            <Route name="teamboards" path="/:pathname">
              <TeamBoardsIndex />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isOpen: state.SideBar.isOpen,
    boardList: state.boardListReducer.boardList,
    teamList: state.teamListReducer.teamList,
    selectedTeam: state.SelectedTeam.selectedTeam,
    todos: state.Todos,
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    getBoard: (team_id, token) => dispatch(getBoard(team_id, token)),
    getTeam: (token) => dispatch(getTeam(token)),
    getTodos: (teamList_id) => dispatch(getTodos(teamList_id)),
  };
};

export default connect(mapStateToProps, mapDispatchtoProps)(ScreenIndex);
