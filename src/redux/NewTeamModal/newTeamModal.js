const initialState = {
  newTeamModalIsOpen: false,
};

const newTeamModal = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NEWTEAMMODAL":
      return {
        ...state,
        newTeamModalIsOpen: !state.newTeamModalIsOpen,
      };
    case "TOGGLE_NEWTEAMBOARDSMODAL":
      return {
        ...state,
        newTeamModalIsOpen: false,
      };
    default:
      return state;
  }
};

export default newTeamModal;
