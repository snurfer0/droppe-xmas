import { combineReducers } from "redux";
import cartsReducer from "./cartsReducer";
import productsReducer from "./productsReducer";
import childrenReducer from "./childrenReducer";
import ordersReducer from "./ordersReducer";

const reducers = combineReducers({
    carts: cartsReducer,
    products: productsReducer,
    children: childrenReducer,
    orders: ordersReducer,
})

export default reducers