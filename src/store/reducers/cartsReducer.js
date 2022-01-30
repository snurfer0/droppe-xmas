import { FETCH_CARTS, ADD_QUANTITY, SUBSTRACT_QUANTITY, DELETE_PRODUCT_FROM_CART } from "../../utils/constants";

const initialState = {
    carts: [],
    discounts: null
}

const cartsReducer = (carts = initialState.carts, action) => {
    switch (action.type) {

        case FETCH_CARTS:
            return action.payload;
        
        case ADD_QUANTITY:
            return carts.map(cart => {
                if (cart.id === action.payload.cartId) {
                        return {
                            ...cart,
                            products: cart.products.map(product => {
                                if (product.productId === action.payload.productId) {
                                    return {
                                        ...product,
                                        quantity: product.quantity + 1
                                    }
                                }
                                return product
                            })
                        }
                    }
                    return cart
                })
        
        case SUBSTRACT_QUANTITY:
            return carts.map(cart => {
                if (cart.id === action.payload.cartId) {
                        return {
                            ...cart,
                            products: cart.products.map(product => {
                                if (product.productId === action.payload.productId) {
                                    return {
                                        ...product,
                                        quantity: (product.quantity > 0) ? product.quantity - 1 : product.quantity
                                    }
                                }
                                return product
                            })
                        }
                    }
                    return cart
                })
        
        case DELETE_PRODUCT_FROM_CART:
            return carts.map(cart => {
                if (cart.id === action.payload.cartId) {
                        return {
                            ...cart,
                            products: cart.products.map(product => {
                                if (product.productId === action.payload.productId) {
                                    return {
                                        ...product,
                                        quantity: 0
                                    }
                                }
                                return product
                            })
                        }
                    }
                    return cart
            })
        
        default:
            return carts
    }
}

export default cartsReducer