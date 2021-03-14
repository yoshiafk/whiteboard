import axios from "axios";
import { BASE_URL_AUTH } from "../../constant/Key";
import {
  GET_CARD,
  HIT_REORDER_CARD,
  HIT_REORDER_LIST,
  POST_CARD,
} from "./types";
import Swal from "sweetalert2";

export const getCardTask = () => (dispatch) => {
  axios
    .get(`${BASE_URL_AUTH}/card`)
    .then((response) => {
      if (response.status === 200) {
        console.log("data from API =>", response.data.data);
        dispatch({
          type: GET_CARD,
          payload: response.data.data,
        });
      }
    })
    .catch((err) => console.log(err));
};

export const addCard = (body, boardId = null, teamId = null, listId = null) => (
  dispatch
) => {
  axios.post(`${BASE_URL_AUTH}/card`, body).then((card) => {
    console.log(card);
    if (boardId)
      axios.put(`${BASE_URL_AUTH}/card/${card.data.data._id}/board`, {
        boardId: boardId.id,
      });
    if (teamId)
      axios.put(`${BASE_URL_AUTH}/card/${card.data.data._id}/team`, {
        teamId: teamId.id,
      });
    if (listId) {
      axios.put(`${BASE_URL_AUTH}/card/${card.data.data._id}/list`, {
        listId: listId,
      });

      axios.put(`${BASE_URL_AUTH}/list/${listId}/card`, {
        cardId: card.data.data._id,
      });
    }
    Swal.fire("", `${card.data.data.title} created!`, "success", {
      buttons: false,
      timer: 1500,
    });
    dispatch({
      type: POST_CARD,
      payload: card.data.data,
    });
  });
};
