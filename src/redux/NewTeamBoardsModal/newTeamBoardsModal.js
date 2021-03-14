const initialState = {
  newTeamBoardsModalIsOpen: false,
};

const newTeamBoardsModal = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NEWTEAMBOARDSMODAL":
      return {
        ...state,
        newTeamBoardsModalIsOpen: !state.newTeamBoardsModalIsOpen,
      };
    case "TOGGLE_NEWTEAMMODAL":
      return {
        ...state,
        newTeamBoardsModalIsOpen: false,
      };
    default:
      return state;
  }
};

export default newTeamBoardsModal;
