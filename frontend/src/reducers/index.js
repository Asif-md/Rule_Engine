import { combineReducers } from "redux";
// import errorReducer from "./errorReducer";
import ruleReducer from "./ruleReducer";

export default combineReducers({
  rule: ruleReducer,
});
