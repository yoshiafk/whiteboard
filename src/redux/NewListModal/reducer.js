const initialState = {
  newListIsOpen: false,
};

const newListModal = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NEWLIST":
      return {
        ...state,
        newListIsOpen: !state.newListIsOpen,
      };
    default:
      return state;
  }
};

export default newListModal;
