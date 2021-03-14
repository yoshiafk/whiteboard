import axios from "axios";
import { createDispatchHook } from "react-redux";
import { getTeam } from "../TeamList/teamListActions";

export const getTodos = (teamList_id) => (dispatch) => {
  axios
    .get(`https://whiteboard-team.herokuapp.com/card`)
    .then((todo) => {
      //   console.log(todo);
      console.log(todo.data.data);

      let _payload = todo.data.data;
      // console.log(_payload);
      _payload = _payload.filter((el) => {
        return el.teamId ? teamList_id.includes(el.teamId._id) : false;
        // return teamList_id.includes(el.teamId._id);
      });
      console.log(_payload);

      dispatch({
        type: "GET_TODOS",
        payload: _payload,
      });
    })
    .catch((err) => console.log(err));
};
