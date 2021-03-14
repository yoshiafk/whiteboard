const initialState = {
  newTaskModalIsOpen: false,
};

const newTaskModal = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NEWTASKMODAL":
      return {
        ...state,
        newTaskModalIsOpen: !state.newTaskModalIsOpen,
      };
    default:
      return {
        ...state,
        newTaskModalIsOpen: false,
      };
  }
};

export default newTaskModal;
