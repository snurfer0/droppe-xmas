import { FETCH_CARTS } from "../../utils/Constants";


const cartsReducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_CARTS:
            return action.payload;
        default:
            return state
    }
}

export default cartsReducer