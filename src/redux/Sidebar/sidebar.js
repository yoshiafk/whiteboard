const initialState = {
  isOpen: true,
};

const SideBar = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBAR":
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default SideBar;
