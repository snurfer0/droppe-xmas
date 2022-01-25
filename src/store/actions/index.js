import axios from 'axios';
import * as constants from '../../utils/constants.js';
import _ from 'lodash'

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchCarts = () => async dispatch => {
    const response = await api.get('/carts?limit=5').catch(err => console.error(err));
    if (response.status === 200) {
        dispatch({ type: constants.FETCH_CARTS, payload: response.data })
    }
    let ids = response.data.map(cart => cart.products.map(p => p.productId));
    ids = ids.reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
    ids = _.uniq(ids)
    fetchProducts(ids)(dispatch)
}

export const fetchProducts = ids => async dispatch => {
    let products, promises = []
    ids.forEach(id => promises.push(api.get(`/products/${id}/`).catch(err => console.error(err))));
    products = await Promise.all(promises)
    products = products.map(r => r.data)
    dispatch({ type: constants.FETCH_PRODUCTS, payload: products })
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