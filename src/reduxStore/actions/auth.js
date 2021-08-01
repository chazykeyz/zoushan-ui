// ACTION TYPES
import {
  REGISTER_SUCCESSFULL,
  REGISTER_FAIL,
  LOGIN_SUCCESSFUL,
  USER_LOADED_SUCCESSFUL,
  USER_LOADED_FAIL,
  LOGIN_FAIL,
  LOGOUT,
  PASSWORD_RESET_SUCCESSFULL,
  PASSWORD_RESET_FAIL,
  PASSWORD_RESET_CONFIRM_SUCCESSFUL,
  PASSWORD_RESET_CONFIRM_FAIL,
} from "./actionTypes";

//
// DATA FETCH
import axios from "axios";
import {
  RegisterAPI,
  LoginAPI,
  userAPI,
  tokenAPI,
  PasswordResetAPI,
  PasswordResetConfirmAPI,
  AuthCheckAPI,
} from "../../constant";

// loading the user
export const user_load = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `JWT ${localStorage.getItem("token")}`,
        Accept: "application/json",
      },
    };

    try {
      await axios.get(userAPI, config).then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        dispatch({
          type: USER_LOADED_SUCCESSFUL,
          payload: res.data,
        });
      });
    } catch (error) {
      dispatch({
        type: USER_LOADED_FAIL,
      });
    }
  } else {
    dispatch({
      type: USER_LOADED_FAIL,
    });
  }
};

// user registration
export const Registration =
  (email, username, password, re_password) => async (dispatch) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    // body
    const body = JSON.stringify({ email, username, password, re_password });

    console.log(body);

    // POSTING DATA
    try {
      await axios.post(RegisterAPI, body, config).then((res) => {
        dispatch({
          type: REGISTER_SUCCESSFULL,
          payload: res.data,
        });
        try {
          dispatch(SignIn(username, password));
        } catch (error) {
          console.log(error);
        }
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };

// authentication checking
export const authCheck = (app) => async (dispatch) => {
  if (app === true) {
    if (localStorage.getItem("token")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `JWT ${localStorage.getItem("token")}`,
          Accept: "application/json",
        },
      };

      const refresh = localStorage.getItem("refresh");

      try {
        axios.post(tokenAPI, { refresh: refresh }, config).then((res) => {
          localStorage.setItem("token", res.data.access);
        });
      } catch (error) {
        dispatch(LogOut());
      }
    } else {
      dispatch(LogOut());
    }
  } else {
    setInterval(() => {
      if (localStorage.getItem("token")) {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `JWT ${localStorage.getItem("token")}`,
            Accept: "application/json",
          },
        };

        const refresh = localStorage.getItem("refresh");

        try {
          axios.post(tokenAPI, { refresh: refresh }, config).then((res) => {
            localStorage.setItem("token", res.data.access);
          });
        } catch (error) {
          dispatch(LogOut());
        }
      } else {
        dispatch(LogOut());
      }
    }, 4000);
  }
};

// login
export const SignIn = (username, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ username, password });
  try {
    await axios.post(LoginAPI, body, config).then((res) => {
      dispatch({
        type: LOGIN_SUCCESSFUL,
        payload: res.data,
      });

      dispatch(user_load());
      dispatch(authCheck(false));
    });
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// log out
export const LogOut = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

// PASSWROD RESET
export const passwordReset = (email) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const body = JSON.stringify({ email });

    await axios.post(PasswordResetAPI, body, config).then((res) => {
      dispatch({
        type: PASSWORD_RESET_SUCCESSFULL,
        payload: res,
      });
    });
  } catch (error) {
    dispatch({
      type: PASSWORD_RESET_FAIL,
    });
  }
};

// PASSWORD CONFIRM
export const passwordResetConfirm =
  (uid, token, new_password, re_new_password) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        uid,
        token,
        new_password,
        re_new_password,
      });

      await axios.post(PasswordResetConfirmAPI, body, config).then((res) => {
        dispatch({
          type: PASSWORD_RESET_CONFIRM_SUCCESSFUL,
          payload: res,
        });
      });
    } catch (error) {
      dispatch({
        type: PASSWORD_RESET_CONFIRM_FAIL,
      });
    }
  };

export const checkAuthenticated = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    };

    const body = JSON.stringify({ token: localStorage.getItem("token") });
    console.log(body);
    try {
      const res = await axios.post(AuthCheckAPI, body, config);

      if (res.data.code === "token_not_valid") {
        dispatch(LogOut());
      }
    } catch (err) {
      console.log(err);
      dispatch(LogOut());
    }
  } else {
    dispatch(LogOut());
  }
};
