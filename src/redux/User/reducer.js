import {
  GET_USERDATA,
  UPLOAD_PROFPIC,
  PATCH_USERDATA,
  PATCH_NEWPASSWORD,
  DELETE_ACCOUNT,
  SET_TOKEN,
} from "./Types";

const initialState = {
  userData: [],
  uploadProfpic: null,
  newPassword: null,
  deleteAccount: "",
  token: null,
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DELETE_ACCOUNT:
      return {
        ...state,
        deleteAccount: action.payload,
      };
    case GET_USERDATA:
      return {
        ...state,
        userData: action.payload,
      };
    case PATCH_NEWPASSWORD:
      return {
        ...state,
        newPassword: action.payload,
      };
    case PATCH_USERDATA:
      return {
        ...state,
        userData: action.payload,
      };
    case UPLOAD_PROFPIC:
      return {
        ...state,
        uploadProfpic: action.payload,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default userReducer;
