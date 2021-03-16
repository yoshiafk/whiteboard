import axios from "axios";
import Swal from "sweetalert2";
// import jwt_decode from "jwt-decode";
import {
  DELETE_ACCOUNT,
  GET_USERDATA,
  UPLOAD_PROFPIC,
  PATCH_USERDATA,
  PATCH_NEWPASSWORD,
  SET_TOKEN,
  SET_LOADING,
} from "./Types";

import {
  USERDATA_API_URL,
  DELETEACCOUNT_API_URL,
  NEWPASSWORD_API_URL,
} from "../../constant/Key";

export const setToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const setLoading = (payload) => {
  return {
    type: SET_LOADING,
    payload: payload,
  };
};

export const getUserData = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .get(`${USERDATA_API_URL}`, config)
    .then((res) => {
      // console.log("response getUserData", res);
      if (res.status === 200) {
        dispatch({
          type: GET_USERDATA,
          payload: res.data.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

export const uploadPhoto = (token, data) => (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  axios
    .patch(`${USERDATA_API_URL}`, data, config)
    .then((res) => {
      // console.log("coba", res);
      dispatch({
        type: UPLOAD_PROFPIC,
        payload: res.data.photo,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const patchUserData = (token, data) => async (dispatch) => {
  let isLoading = true;
  dispatch(setLoading(isLoading));
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.patch(`${USERDATA_API_URL}`, data, config);
    if (res.status === 200) {
      dispatch({
        type: PATCH_USERDATA,
        payload: res.data,
      });
      let isLoading = false;
      dispatch(setLoading(isLoading));
      Swal.fire("", "Change Applied!", "success", {
        buttons: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/account"; //pindah halaman
      });
    } else if (res.status !== 200) {
      Swal.fire("", "error", "Re-check your new information");
    }
  } catch (err) {
    let isLoading = false;
    dispatch(setLoading(isLoading));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Re-check your new information",
    });
  }
};

export const deleteAccount = (token) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.delete(`${DELETEACCOUNT_API_URL}`, config);
    if (res.status === 200) {
      dispatch({
        type: DELETE_ACCOUNT,
        payload: res.data.message,
      });
      Swal.fire("", "Your account has been deleted", "success", {
        buttons: false,
        timer: 1500,
      }).then(() => {
        localStorage.removeItem("token");
        window.location.href = "/"; //pindah halaman
      });
    } else if (res.status !== 200) {
      Swal.fire("", "error", "Cannot delete your Account");
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Cannot delete your Account",
    });
  }
};

export const patchNewPassword = (token, body) => async (dispatch) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  try {
    const res = await axios.patch(`${NEWPASSWORD_API_URL}`, body, config);
    if (res.status === 201) {
      dispatch({
        type: PATCH_NEWPASSWORD,
        payload: res.data.message,
      });
      Swal.fire("", "Password Changed! Relogin needed", "success", {
        buttons: false,
        timer: 1500,
      }).then(() => {
        localStorage.removeItem("token");
        window.location.href = "/signin"; //pindah halaman
      });
    } else if (res.status !== 201) {
      Swal.fire("", "error", "your password is not changed");
    }
  } catch (err) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "your password is not changed",
    });
  }
};
