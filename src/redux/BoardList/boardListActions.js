import { GET_BOARD, ADD_BOARD, SET_LOADING } from "./boardListTypes";
import axios from "axios";
import Swal from "sweetalert2";

// export const getBoard = (team_id, token) => (dispatch) => {
//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };

//   axios
//     .get(`https://whiteboard-team.herokuapp.com/api/board/`, config)
//     .then((board) => {
//       console.log(board);
//       dispatch({
//         type: GET_BOARD,
//         payload: board.data.data,
//       });
//     })
//     .catch((err) => console.log(err));
// };

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

// export const addBoard = (body, token) => async (dispatch) => {
//   let isLoading = true;
//   dispatch(setLoading(isLoading));

//   const config = {
//     headers: { Authorization: `Bearer ${token}` },
//   };

//   try {
//     const res = await axios.post(
//       `https://whiteboard-team.herokuapp.com/api/board`,
//       body,
//       config
//     );
//     if (res.status === 200) {
//       dispatch((board) => {
//         dispatch({
//           type: ADD_BOARD,
//           payload: board.data.data,
//         });
//         let isLoading = false;
//         dispatch(setLoading(isLoading));
//         Swal.fire(
//           "",
//           `New board: ${board.data.data.title} is created!`,
//           "success",
//           {
//             buttons: false,
//             timer: 1500,
//           }
//         );
//       });
//     } else if (res.status !== 200) {
//       Swal.fire("", "error", "Failed");
//     }
//   } catch (err) {
//     let isLoading = false;
//     dispatch(setLoading(isLoading));
//     Swal.fire({
//       icon: "error",
//       title: "Oops...",
//       text: "failed to create board",
//     });
//   }
// };

export const addBoard = (body, token) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  axios
    .post(`https://whiteboard-team.herokuapp.com/api/board`, body, config)
    .then((board) => {
      // alert(`New board ${board.data.data.title} is created!`);
      Swal.fire(
        "",
        `New board: ${board.data.data.title} is created!`,
        "success",
        {
          buttons: false,
          timer: 1500,
        }
      );
      dispatch({
        type: ADD_BOARD,
        payload: board.data.data,
      });
    });
};

export const getBoard = (team_id, token, multi = 0) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  // console.log(multi);
  axios
    .get(`https://whiteboard-team.herokuapp.com/api/board/`, config)
    .then((board) => {
      // console.log(board);
      // console.log(board.data.data);
      // console.log(multi);
      let _payload = board.data.data;
      // if (team_id != null && multi == 0) {
      //   _payload = _payload.filter((el) => {
      //     return el.teamId.includes(team_id);
      //   });
      // } else {
      //   let array_team = [];
      //   for (let i = 0; i < team_id.length; i++) {
      //     array_team.push(team_id[i]._id);
      //   }
      // team_id.forEach((element) => {
      //   array_team.push(element._id);
      // });

      //   console.log("test");

      //   _payload = _payload.filter((x) => {
      //     return array_team.includes(x.teamId[0]);
      //   });
      // }
      dispatch({
        type: GET_BOARD,
        payload: _payload,
      });
    })
    .catch((err) => console.log(err));
};
