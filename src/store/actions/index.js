import axios from 'axios';
import * as constants from '../../utils/Constants.js';

const api = axios.create({ baseURL: "https://fakestoreapi.com" });

export const fetchCarts = () => async dispatch => {
    const response = await api.get('/carts?limit=5').catch(err => console.error(err));
    console.log(response);
    if (response.status === 200) {
        dispatch({ type: constants.FETCH_CARTS, payload: response.data })
    }

}

export const fetchProduct = id => async dispatch => {
    const response = await api.get(`/product/${id}/`).catch(err => console.error(err));

    if (response.status === 200) {
        dispatch({ type: constants.FETCH_PRODUCT, payload: response.data })
    }
}