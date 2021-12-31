import { combineReducers } from "redux";
import AuthReducer from "./authReducer";
import CounterReducer from "./counterReducer";

const rootReducer = combineReducers({
  counter: CounterReducer,
  auth: AuthReducer,
});

export default rootReducer;
