export const selectBoard = (board, _id) => ({
  type: "ASSIGN_SELECTED_BOARD",
  payload: { board: board, id: _id },
});
