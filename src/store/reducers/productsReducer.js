import { FETCH_PRODUCTS } from "../../utils/constants";

const initialState = {
    products: []
}

const productsReducer = (products = initialState.products, action) => {
    switch (action.type) {

        case FETCH_PRODUCTS:
            return [...products, ...action.payload]

        default:
            return products
    }
}

export default productsReducer