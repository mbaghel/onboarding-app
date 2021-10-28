import { combineReducers } from "redux";
import authUserReducer from "./authUser";

export default combineReducers({
  authUser: authUserReducer,
});
