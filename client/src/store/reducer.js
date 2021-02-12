import { combineReducers } from 'redux';
import {BrowserRouter} from 'react-router-dom';
import history from './history';

const rootReducer = combineReducers({
  router: BrowserRouter(history),
});

export default rootReducer;