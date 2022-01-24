import { FETCH_PRODUCT } from "../../utils/Constants";

const initialState = {
    products: []
}

const productsReducer = (products = initialState.products, action) => {
    switch (action.type) {
        case FETCH_PRODUCT:
            if (!products.filter(p => p.id === action.payload.id).length) {
                return [...products, action.payload]
            } 
        default:
            return products
    }
}

export default productsReducer