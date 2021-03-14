import { GET_LIST, ADD_LIST, MOVE_LIST, MOVE_CARD } from "./types";

let initialState = {
  // list: [
  //   {
  //     _id: "",
  //     boardId: [
  //       {
  //         _id: "",
  //         title: "",
  //       },
  //     ],
  //     cardId: [
  //       {
  //         userId: [
  //           {
  //             photo: "",
  //             _id: "",
  //             name: "",
  //           },
  //         ],
  //         active: false,
  //         _id: "",
  //         priority: 0,
  //         title: "",
  //       },
  //     ],
  //     userId: [{}],
  //     tittle: "",
  //   },
  // ],
  list: [],
};

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST:
      return {
        ...state,
        list: action.payload,
      };
    case ADD_LIST:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    case MOVE_LIST: {
      const { oldListIndex, newListIndex } = action.payload;
      const newLists = Array.from(state.list);
      const [removedList] = newLists.splice(oldListIndex, 1);
      newLists.splice(newListIndex, 0, removedList);
      return { list: newLists };
    }
    // case MOVE_CARD: {
    //   const {
    //     oldCardIndex,
    //     newCardIndex,
    //     sourceListId,
    //     destListId,
    //   } = action.payload;
    //   // Move within the same list
    //   if (sourceListId === destListId) {
    //     const newCards = Array.from(state[sourceListId].cards);
    //     const [removedCard] = newCards.splice(oldCardIndex, 1);
    //     newCards.splice(newCardIndex, 0, removedCard);
    //     return {
    //       ...state,
    //       [sourceListId]: { ...state[sourceListId], cards: newCards },
    //     };
    //   }
    //   // Move card from one list to another
    //   const sourceCards = Array.from(state[sourceListId].cards);
    //   const [removedCard] = sourceCards.splice(oldCardIndex, 1);
    //   const destinationCards = Array.from(state[destListId].cards);
    //   destinationCards.splice(newCardIndex, 0, removedCard);
    //   return {
    //     ...state,
    //     [sourceListId]: { ...state[sourceListId], cards: sourceCards },
    //     [destListId]: { ...state[destListId], cards: destinationCards },
    //   };
    // }
    default:
      return state;
  }
};

export default listReducer;
