import { combineReducers } from "redux";
import authReducer from "./Auth/reducer";
import userReducer from "./User/reducer";
import SelectedTeam from "./SelectedTeam/SelectedTeam";
import SideBar from "./Sidebar/sidebar";
import sideBarLoc from "./SideBarLoc/sideBarLoc";

import Todos from "./Todos/Todos";
import newTeamBoardsModal from "./NewTeamBoardsModal/newTeamBoardsModal";
import newTeamModal from "./NewTeamModal/newTeamModal";
import notificationModal from "./Notification/notificationModal";
import teamListReducer from "./TeamList/teamListReducer";
import boardListReducer from "./BoardList/boardListReducer";
import listReducer from "./ListDetail/reducer";
import SelectedBoard from "./SelectedBoard/SelectedBoard";
import newListModal from "./NewListModal/reducer";

export default combineReducers({
  auths: authReducer,
  users: userReducer,
  allList: listReducer,
  SideBar,
  sideBarLoc,
  teamListReducer,
  SelectedTeam,
  SelectedBoard,
  Todos,
  newTeamBoardsModal,
  newTeamModal,
  notificationModal,
  boardListReducer,
  newListModal,
});
