import { CONFIRM_ORDER } from "../../utils/constants";

const initialState = {
    orders: []
}

const ordersReducer = (orders = initialState.orders, action) => {
    switch (action.type) {

        case CONFIRM_ORDER:
            return [...orders, { id: orders.length + 1, ...action.payload}]

        default:
            return orders
    }
}

export default ordersReducer