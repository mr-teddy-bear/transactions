import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import transactionsReducer from "./transactions/reducer";
import loginReducer from "./auth/reducer";

// import { BrowserRouter } from "react-router-dom";
import history from "./history";

const rootReducer = combineReducers({
  router: connectRouter(history),
  transactions: transactionsReducer,
  auth: loginReducer,
});

export default rootReducer;
