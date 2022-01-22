import { combineReducers } from "redux";
import cartsReducer from "./cartsReducer";
import productsReducer from "./productsReducer";
import childrenReducer from "./childrenReducer";

const reducers = combineReducers({
    carts: cartsReducer,
    products: productsReducer,
    children: childrenReducer,
})

export default reducers