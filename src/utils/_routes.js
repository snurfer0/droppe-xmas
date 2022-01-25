import Home from "../components/pages/Home"
import Checkout from "../components/pages/OrderConfirm"
import Orders from "../components/pages/Orders"

export const _routes = [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Orders,
        path: '/orders',
        exact: false
    },
    {
        component: Checkout,
        path: '/checkout',
        exact: false
    }
]