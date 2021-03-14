const initialState = {
  selectedTeam: null,
};

const SelectedTeam = (state = initialState, action) => {
  switch (action.type) {
    case "ASSIGN_SELECTED_TEAM":
      return {
        ...state,
        selectedTeam: action.payload,
      };
    default:
      return state;
  }
};

export default SelectedTeam;
