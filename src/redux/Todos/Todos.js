const initialState = {
  todos: [],
};

const Todos = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return {
        ...state,
        todos: [...action.payload],
      };
    default:
      return state;
  }
};

export default Todos;
