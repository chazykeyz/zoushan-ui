// ACTION TYPES
import {
  PASSWORD_RESET_SUCCESSFULL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESSFUL,
  PASSWORD_RESET_CONFIRM_FAIL,
  LOGIN_SUCCESSFUL,
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED_SUCCESSFUL,
  USER_LOADED_FAIL,
} from "../actions/actionTypes";
// UPDATE OBJECT
import { updatedObject } from "./utility";

// fetch initial user from local storage
const token = localStorage.getItem("token");
const refresh = localStorage.getItem("refresh");
const user = JSON.parse(localStorage.getItem("user"));

const initialState = {
  token: token ? token : null,
  refresh: refresh ? refresh : null,
  user: user ? user : null,
  isAthenticated: token ? true : false,
  error: false,
  AuthResponse: null,
};

const registerSuccess = (state, action) => {
  // save to local storage
  const User = localStorage.setItem("user", action.payload);
  console.log("register reducer...");
  return updatedObject(state, {
    user: action.payload,
  });
};

const registerFail = (state, action) => {
  console.log("falied to register");
  return updatedObject(state, {
    user: [],
  });
};

const loginSuccess = (state, action) => {
  // save to local storage
  localStorage.setItem("token", action.payload.access);
  localStorage.setItem("refresh", action.payload.refresh);
  console.log("login successfiul completely");

  return updatedObject(state, {
    token: action.payload.access,
    refresh: action.payload.refresh,
    isAthenticated: true,
    error: false,
  });
};

const loginFail = (state, action) => {
  return updatedObject(state, {
    token: null,
    refresh: null,
    isAthenticated: false,
    error: true,
  });
};

const logout = (state, action) => {
  localStorage.clear();
  return updatedObject(state, {
    token: null,
    refresh: null,
    isAthenticated: false,
    user: [],
  });
};

const userLoadedSuccess = (state, action) => {
  return updatedObject(state, {
    user: action.payload,
  });
};

const userLoadedFail = (state, action) => {
  return updatedObject(state, {
    user: [],
  });
};

const passwordResetSuccessful = (state, action) => {
  return updatedObject(state, {
    AuthResponse: action.payload,
  });
};

const passwordResetFail = (state, action) => {
  return updatedObject(state, {
    AuthResponse: action.payload,
  });
};

const passwordResetConfirmSuccessful = (state, action) => {
  return updatedObject(state, {
    AuthResponse: action.payload,
  });
};

const passwordResetConfirmFail = (state, action) => {
  return updatedObject(state, {
    AuthResponse: action.payload,
  });
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESSFULL:
      return registerSuccess(state, action);
    case REGISTER_FAIL:
      return registerFail(state, action);
    case LOGIN_SUCCESSFUL:
      return loginSuccess(state, action);
    case LOGIN_FAIL:
      return loginFail(state, action);
    case USER_LOADED_SUCCESSFUL:
      return userLoadedSuccess(state, action);
    case USER_LOADED_FAIL:
      return userLoadedFail(state, action);
    case LOGOUT:
      return logout(state, action);
    case PASSWORD_RESET_SUCCESSFULL:
      return passwordResetSuccessful(state, action);
    case PASSWORD_RESET_FAIL:
      return passwordResetFail(state, action);
    case PASSWORD_RESET_CONFIRM_SUCCESSFUL:
      return passwordResetConfirmSuccessful(state, action);
    case PASSWORD_RESET_CONFIRM_FAIL:
      return passwordResetConfirmFail(state, action);
    default:
      return state;
  }
};

export default AuthReducer;
