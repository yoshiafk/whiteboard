const initialState = {
  selectedBoard: null,
};

const SelectedBoard = (state = initialState, action) => {
  switch (action.type) {
    case "ASSIGN_SELECTED_BOARD":
      return {
        ...state,
        selectedBoard: action.payload,
      };
    default:
      return state;
  }
};

export default SelectedBoard;
