import axios from "axios";
import { BASE_URL_AUTH } from "../../constant/Key";
import { GET_LIST, ADD_LIST } from "./types";
import Swal from "sweetalert2";

export const getAllList = () => (dispatch) => {
  axios
    .get(`${BASE_URL_AUTH}/list`)
    .then((list) => {
      if (list.status === 200) {
        console.log("data from LIST =>", list.data.data);
        dispatch({
          type: GET_LIST,
          payload: list.data.data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const addList = (body, boardId = null) => (dispatch) => {
  axios.post(`${BASE_URL_AUTH}/list`, body).then((list) => {
    if (boardId)
      axios.put(`${BASE_URL_AUTH}/list/${list.data.data._id}/board`, {
        boardId: boardId.id,
      });

    Swal.fire("", `${list.data.data.title} created!`, "success", {
      buttons: false,
      timer: 1500,
    });

    dispatch({
      type: ADD_LIST,
      payload: list.data.data,
    });
  });
};
