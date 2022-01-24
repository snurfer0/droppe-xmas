import axios from 'axios';
import * as constants from '../../utils/Constants.js';

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchCarts = () => async dispatch => {
    const response = await api.get('/carts?limit=5').catch(err => console.error(err));
    if (response.status === 200) {
        dispatch({ type: constants.FETCH_CARTS, payload: response.data })
    }
}

export const fetchProduct = id => async dispatch => {
    const response = await api.get(`/products/${id}/`).catch(err => console.error(err))
    if (response.status === 200) {
        dispatch({ type: constants.FETCH_PRODUCT, payload: response.data })
    }
}

export const substractQuantity = (cartId, productId) => async dispatch => {
    dispatch({ type: constants.SUBSTRACT_QUANTITY, payload: { cartId, productId } })
}

export const addQuantity = (cartId, productId) => async dispatch => {
    dispatch({ type: constants.ADD_QUANTITY, payload: { cartId, productId } })
}

export const deleteProductFromCart = (cartId, productId) => async dispatch => {
    dispatch({ type: constants.DELETE_PRODUCT_FROM_CART, payload: { cartId, productId } })
}

export const storeChildrenInState = children => async dispatch => {
    dispatch({ type: constants.STORE_CHILDREN_IN_STATE, payload: children })
}