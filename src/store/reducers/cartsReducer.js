import { FETCH_CARTS, ADD_QUANTITY, SUBSTRACT_QUANTITY, DELETE_PRODUCT_FROM_CART } from "../../utils/Constants";


const cartsReducer = (carts = [], action) => {
    switch (action.type) {
        case FETCH_CARTS:
            return action.payload;
        case ADD_QUANTITY:
            var { cartId, productId } = action.payload
            return carts.map(cart => {
                if (cart.id === cartId) {
                    return {
                        ...cart,
                        products: cart.products.map(product => {
                            if (product.productId === productId) {
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
            var { cartId, productId } = action.payload
            return carts.map(cart => {
                if (cart.id === cartId) {
                    return {
                        ...cart,
                        products: cart.products.map(product => {
                            if (product.productId === productId) {
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
            var { cartId, productId } = action.payload
            return carts.map(cart => {
                if (cart.id === cartId) {
                    return {
                        ...cart,
                        products: cart.products.map(product => {
                            if (product.productId === productId) {
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