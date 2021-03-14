const initialState = {
  sideBarLoc: "Home",
};

const sideBarLoc = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_SIDEBARLOCATION":
      return {
        ...state,
        sideBarLoc: action.payload,
      };
    default:
      return state;
  }
};

export default sideBarLoc;
