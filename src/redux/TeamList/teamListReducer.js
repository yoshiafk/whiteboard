import { ADD_TEAM, GET_TEAM } from "./teamListTypes";
import axios from "axios";

const initialState = {
  teamList: [],
};

const teamListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TEAM:
      return {
        ...state,
        teamList: [...action.payload],
      };
    case ADD_TEAM:
      return {
        ...state,
        teamList: [...state.teamList, action.payload],
      };
    default:
      return state;
  }
};

export default teamListReducer;
