import {
  GET_CARD,
  HIT_REORDER_LIST,
  HIT_REORDER_CARD,
  POST_CARD,
} from "./types";

let initialState = {
  task: [],
};

const cardTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CARD:
      return {
        ...state,
        task: action.payload,
      };
    case POST_CARD:
      return {
        ...state,
        task: [...state.task, action.payload],
      };
    default:
      return state;
  }
};

export default cardTaskReducer;
