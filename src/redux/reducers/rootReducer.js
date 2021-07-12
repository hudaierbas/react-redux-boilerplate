import exampleReducer from "./exampleReducer";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  exampleReducer: exampleReducer,
});
