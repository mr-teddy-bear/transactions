import { combineReducers } from "redux";
import transactionsReducer from "./transactions/reducer";
import loginReducer from "./auth/reducer";

// import { BrowserRouter } from "react-router-dom";
// import history from "./history";

const rootReducer = combineReducers({
  //router: BrowserRouter(history),
  transactions: transactionsReducer,
  auth: loginReducer,
});

export default rootReducer;
