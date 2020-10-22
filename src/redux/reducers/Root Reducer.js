import { combineReducers } from "redux";
import playerReducer from "./Players Reducer";

export default combineReducers({
    players: playerReducer,
});
