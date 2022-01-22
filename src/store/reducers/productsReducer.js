import { FETCH_PRODUCTS } from "../../utils/Constants";


const productsReducer = (products = [], action) => {
    switch (action.type) {
        case FETCH_PRODUCTS:
            return action.payload
        default:
            return products
    }
}

export default productsReducer