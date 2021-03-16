import axios from "axios";
// import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";
import {
  POST_SIGNUP,
  POST_LOGIN,
  SET_TOKEN,
  POST_FORGOTPASSWORD,
  PATCH_RESETPASSWORD,
  POST_GOOGLE,
  SET_LOADING,
} from "./types";

import {
  LOGIN_AUTH_API_URL,
  SIGNUP_AUTH_API_URL,
  FORGOT_PASSWORD_API_URL,
  RESET_PASSWORD_API_URL,
  GOOGLE_API_URL,
  FACEBOOK_API_URL,
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

export const postSignUp = (body) => async (dispatch) => {
  console.log(body, "body action");
  let isLoading = true;
  dispatch(setLoading(isLoading));
  try {
    const res = await axios.post(`${SIGNUP_AUTH_API_URL}`, body);
    if (res.status === 201) {
      dispatch({
        type: POST_SIGNUP,
        payload: res.data.token,
        token: localStorage.setItem("token", res.data.token),
      });
      let isLoading = false;
      dispatch(setLoading(isLoading));
      Swal.fire("", "Signup Success!", "success", {
        buttons: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/home";
      });
    } else if (res.status !== 201) {
      Swal.fire("", "error", "Check your email/password");
    }
  } catch (err) {
    let isLoading = false;
    dispatch(setLoading(isLoading));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Check your email/password",
    });
  }
};

export const postLogIn = (body) => async (dispatch) => {
  console.log(body, "body action");
  let isLoading = true;
  dispatch(setLoading(isLoading));
  try {
    const res = await axios.post(`${LOGIN_AUTH_API_URL}`, body);
    if (res.status === 200) {
      dispatch({
        type: POST_LOGIN,
        payload: res.data.token,
        token: localStorage.setItem("token", res.data.token),
      });
      let isLoading = false;
      dispatch(setLoading(isLoading));
      Swal.fire("", "Login Success!", "success", {
        buttons: false,
        timer: 1500,
      }).then(() => {
        window.location.href = "/home";
      });
    } else if (res.status !== 200) {
      Swal.fire("", "error", "Check your email and password!");
    }
  } catch (err) {
    let isLoading = false;
    dispatch(setLoading(isLoading));
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Check your email and password!",
    });
  }
};

export const postForgotPassword = (body) => async (dispatch) => {
  axios.post(`${FORGOT_PASSWORD_API_URL}`, body).then((res) => {
    // console.log("isi res =>", res);
    dispatch({
      type: POST_FORGOTPASSWORD,
      payload: localStorage.getItem("token"),
    });
  });
};

export const patchResetPassword = (body) => async (dispatch) => {
  axios
    .patch(
      `${RESET_PASSWORD_API_URL}5b36aa3a164c1bacce24bcedc5f6b85bdbf59aafcbd176c4dc022afc3cacebe4`,
      body
    )
    .then((res) => {
      // console.log("isi res =>", res);
      dispatch({
        type: PATCH_RESETPASSWORD,
        payload: localStorage.getItem("token"),
      });
    });
};

export const setDataToken = () => (dispatch) => {
  dispatch({
    type: SET_TOKEN,
    payload: localStorage.getItem("token"),
  });
};

export const googleLoginTry = (data) => async (dispatch) => {
  // console.log(data, "data action");
  try {
    const res = await axios.get(`${GOOGLE_API_URL}`, data);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("response", res.status);
      alert("", "Login Success!", "success", {
        buttons: false,
        timer: 1500,
      });
    } else if (res.status !== 200) {
      localStorage.removeItem("token", res.data.token);
      alert("", `${res}`, "info");
    }
    dispatch({
      type: POST_GOOGLE,
      payload: data,
    });
  } catch (err) {
    alert("error");
  }
};

export const facebookTry = (data) => async (dispatch) => {
  // console.log(data, "data action");
  try {
    const res = await axios.get(`${FACEBOOK_API_URL}`, data);
    if (res.status === 200) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("response", res.status);
      alert("", "Login Success!", "success", {
        buttons: false,
        timer: 1500,
      });
    } else if (res.status !== 200) {
      localStorage.removeItem("token", res.data.token);
      alert("", `${res}`, "info");
    }
    dispatch({
      type: POST_GOOGLE,
      payload: data,
    });
  } catch (err) {
    alert("error");
  }
};
