import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import thunkMiddleware from "redux-thunk";

export default createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware
  )
);