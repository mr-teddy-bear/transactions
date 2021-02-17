import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";
import rootReducer from "./reducer";
import setAuthTokenHeader from "../services/configure";
import history from "./history";

const getInitialState = () => {
  const token = localStorage.getItem("token");
  if (token) {
    setAuthTokenHeader(token);
    return {
      auth: {
        isRequesting: false,
        isAuth: true,
        user: {},
        error: "",
        message: "",
      },
    };
  }
  return {
    auth: {
      isRequesting: false,
      isAuth: false,
      user: {},
      error: "",
      message: "",
    },
  };
};

const initialState = getInitialState();

const middleWare = [thunk, routerMiddleware(history)];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
