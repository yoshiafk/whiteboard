import axios from "axios";
import { BASE_URL_AUTH } from "../../constant/Key";
import { GET_CARD, HIT_REORDER_CARD, HIT_REORDER_LIST } from "./types";

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
