import {combineReducers} from "redux"
import tweets from "./plants";
import auth from "./auth";

export default combineReducers({tweets, auth})