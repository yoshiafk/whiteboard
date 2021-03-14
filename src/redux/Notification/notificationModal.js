const initialState = {
  notificationModalIsOpen: false,
};

const notificationModal = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_NOTIFICATIONMODAL":
      return {
        ...state,
        notificationModalIsOpen: !state.notificationModalIsOpen,
      };
    default:
      return {
        ...state,
        notificationModalIsOpen: false,
      };
  }
};

export default notificationModal;
