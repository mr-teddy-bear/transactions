import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REG_FAILURE,
  REG_REQUEST,
  REG_SUCCESS,
  LOG_OUT,
  CHANGE_MESSAGE,
} from "../actionTypes";
//import setAuthTokenHeader from "services/api/configure";
//import history from "../history";

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    payload: user,
  };
}
export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    payload: error,
  };
}
export function regRequest() {
  return {
    type: REG_REQUEST,
  };
}
export function regSuccess() {
  return {
    type: REG_SUCCESS,
  };
}
export function regFailure(error) {
  return {
    type: REG_FAILURE,
    payload: error,
  };
}

export function logOut() {
  localStorage.clear();
  //history.push("/");
  return {
    type: LOG_OUT,
  };
}

export function changeMessage(text) {
  return {
    type: CHANGE_MESSAGE,
    payload: text,
  };
}

export const login = (userData) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axios.post("/login", userData);
    const { token, ...user } = response.data;
    //setAuthTokenHeader(token);
    localStorage.setItem("token", token);
    //history.push("/contacts?page=1");
    dispatch(loginSuccess(user));
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};
