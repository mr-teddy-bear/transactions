import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import {} from 'react-router'
import thunk from 'redux-thunk';
import history from './history';
import rootReducer from './reducer';

const getInitialState = () => {
  return {
    auth: {
      isRequesting: false,
      isAuth: false,
      user: {},
      error: '',
    },
  };
};

const initialState = getInitialState();

const middleWare = [thunk];

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
