export const selectTeam = (team, _id) => ({
  type: "ASSIGN_SELECTED_TEAM",
  payload: { team: team, id: _id },
});
