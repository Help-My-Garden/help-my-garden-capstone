import {combineReducers} from "redux"
import plantReducer from './plantReducer'
import authReducer from "./authReducer";

export const combinedReducers = combineReducers({
  tweets: tweetReducer,
  auth: authReducer,
});