import { combineReducers } from 'redux';
import transactionsReducer from './transactions/reducer';
import {BrowserRouter} from 'react-router-dom';
import history from './history';

const rootReducer = combineReducers({
  //router: BrowserRouter(history),
  transactions: transactionsReducer
});

export default rootReducer;