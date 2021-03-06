import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
  CHANGE_MESSAGE,
} from "../actionTypes";

const initialState = {
  isRequesting: false,
  isAuth: false,
  user: {},
  error: "",
  isRegistred: false,
  message: "фыв",
};

function loginReducer(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_FAILURE:
      return {
        ...state,
        error: payload,
        message: "Неверный логин или пароль",
        isRequesting: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: { username: payload.user },
        isAuth: true,
        isRequesting: false,
      };
    case LOGIN_REQUEST:
      return {
        ...state,
        isRequesting: true,
      };

    case LOG_OUT:
      return {
        ...state,
        isAuth: false,
      };

    case CHANGE_MESSAGE:
      return {
        ...state,
        message: payload,
      };
    default:
      return state;
  }
}

export default loginReducer;
