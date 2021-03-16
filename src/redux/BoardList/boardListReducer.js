import { ADD_BOARD, GET_BOARD, SET_LOADING } from "./boardListTypes";

const initialState = {
  boardList: [],
  isBoardLoading: false,
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
    case SET_LOADING:
      return {
        ...state,
        isBoardLoading: action.payload,
      };
    default:
      return state;
  }
};

export default boardListReducer;
