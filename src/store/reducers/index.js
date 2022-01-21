import { combineReducers } from "redux";
import cartsReducer from "./carts";

const reducers = combineReducers({
    carts: cartsReducer,
})

export default reducers