import loggedReducer from "./isLogged";
import balanceReducer from "./balance";
import categoryReducer from "./category";
import accountReducer from "./account";
import accountsReducer from "./accouts";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  isLogged: loggedReducer,
  balance: balanceReducer,
  category: categoryReducer,
  account: accountReducer,
  accounts: accountsReducer,
});

export default allReducers;
