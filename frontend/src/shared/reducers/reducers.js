import {combineReducers} from "redux"
import plantReducer from './plantReducer'
import authReducer from "./authReducer";

export const combinedReducers = combineReducers({
  plants: plantReducer,
  auth: authReducer,
});