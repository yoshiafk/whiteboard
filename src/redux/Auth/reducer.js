import {
  POST_SIGNUP,
  POST_LOGIN,
  SET_TOKEN,
  POST_FORGOTPASSWORD,
  PATCH_RESETPASSWORD,
  POST_GOOGLE,
  SET_LOADING,
} from "./types";

const initialState = {
  googleLogIn: null,
  signup: null,
  logIn: null,
  forgotPassword: null,
  resetPassword: null,
  token: null,
  status: null,
  uploadImg: null,
  isAuthenticated: localStorage.getItem("token") ? true : false,
  isAuthLoading: false,
};

const authReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        isAuthLoading: payload,
      };
    case POST_SIGNUP:
      return {
        ...state,
        signup: payload,
        isAuthenticated: true,
      };
    case POST_LOGIN:
      return {
        ...state,
        logIn: payload,
        // status: payload.status,
        isAuthenticated: true,
      };
    case POST_GOOGLE:
      return {
        ...state,
        googleLogIn: payload,
      };
    case POST_FORGOTPASSWORD:
      return {
        ...state,
        forgotPassword: payload,
      };
    case PATCH_RESETPASSWORD:
      return {
        ...state,
        resetPassword: payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        Token: payload.token,
      };
    default:
      return state;
  }
};

export default authReducer;
