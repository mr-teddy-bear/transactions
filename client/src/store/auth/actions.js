import axios from "axios";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOG_OUT,
  CHANGE_MESSAGE,
} from "../actionTypes";
import setAuthTokenHeader from "../../services/configure";
import history from "../history";
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
    const response = await axios.post("http://localhost:3001/login", userData);
    const { token, ...user } = response.data;
    setAuthTokenHeader(token);
    localStorage.setItem("token", token);
    dispatch(loginSuccess(user));
    history.push("/home");
  } catch (e) {
    dispatch(loginFailure(e.message));
  }
};
