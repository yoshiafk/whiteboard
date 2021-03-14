import { ADD_TEAM, GET_TEAM } from "./teamListTypes";
import axios from "axios";
import Swal from "sweetalert2";

export const addTeam = (body, token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // axios
  //   .post(`https://whiteboard-team.herokuapp.com/api/team`, body, config)
  //   .then((team) => {
  //     // console.log(token);
  //     // console.log(
  //     //   `https://whiteboard-team.herokuapp.com/api/team/${team.data.data._id}/team`
  //     // );
  //     const res = axios.put(
  //       `https://whiteboard-team.herokuapp.com/api/team/${team.data.data._id}/team`,
  //       { userId: token },
  //       config
  //     );

  //     dispatch({
  //       type: ADD_TEAM,
  //       payload: {
  //         teamName: team.data.data.teamName,
  //         _id: team.data.data._id,
  //       },
  //     });
  //   })
  //   .catch((err) => console.log(err));

  const team = await axios.post(
    `https://whiteboard-team.herokuapp.com/api/team`,
    body,
    config
  );
  // const team_id = team.data.data._id;
  // const user_data = { userId: "6044a7e78983e40004ac074f" };
  // const res = await axios.put(
  //   `https://whiteboard-team.herokuapp.com/api/team/${team_id}/team`,
  //   user_data,
  //   config
  // );
  // console.log(res);
  // alert(`New team ${team.data.data.teamName} is created!`);
  Swal.fire("", `New team: ${team.data.data.teamName} is created!`, "success", {
    buttons: false,
    timer: 1500,
  });
  dispatch({
    type: ADD_TEAM,
    payload: {
      teamName: team.data.data.teamName,
      _id: team.data.data._id,
    },
  });
};

export const getTeam = (token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .get(`https://whiteboard-team.herokuapp.com/api/team`, config)
    .then((team) => {
      // console.log(team);
      dispatch({
        type: GET_TEAM,
        payload: team.data.data,
        // payload: team.data.data.filter((el) => {
        //   return el.userId.includes("6044a7e78983e40004ac074f");
        // }),
      });
    })
    .catch((err) => console.log(err));
};
