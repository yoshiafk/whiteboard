import { ADD_BOARD, GET_BOARD } from "./boardListTypes";

const initialState = {
  boardList: [],
};

const boardListReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD:
      return {
        ...state,
        boardList: [...action.payload],
      };

    case ADD_BOARD:
      return {
        ...state,
        boardList: [...state.boardList, action.payload],
      };
    default:
      return state;
  }
};

export default boardListReducer;
