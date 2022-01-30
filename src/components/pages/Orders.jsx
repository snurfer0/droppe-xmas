import React from 'react';
import { connect } from 'react-redux';
import CartProduct from '../items/CartProduct';

const EmptyPage = () => {
    return (
        <div className='empty-orders-page'>
            <div className='message'>
                No Orders Found
            </div>
        </div>
    )
}

const OrderCarts = ({ cart, stateProducts }) => {
    return (
        <ul key={cart.id}>
            <h3>{cart.childName}&apos; Items</h3>
            {cart.products.map(cartProduct => {
                let stateProduct = stateProducts.find(p => p.id === cartProduct.productId)
                return (
                    <li key={cartProduct.productId}>
                        <CartProduct {...{ cartProduct, stateProduct }} />
                    </li>
                )
            })}
        </ul>
    )
}

const OrderTab = ({ order, stateProducts }) => {

    return (
        <div key={order.id} className="tab mt-1">
            <input type="checkbox" id={order.id} />
            <label className="tab-label" htmlFor={order.id}>Order #{order.id} <small>PROCESSING..</small></label>
            <div className="tab-content">
                {order.carts.map(cart => <OrderCarts key={cart.id} {...{ cart, stateProducts }} />)}
                <div className="price-wrapper mr-2">
                    {(order.finalPrice.rawTotal - order.finalPrice.total > 0) &&
                        <div className="old-price">$ {order.finalPrice.rawTotal}<span className="strikethrough"></span></div>}
                    <div className="price strikethrough">$ {order.finalPrice.total}</div>
                </div>
            </div>
        </div>
    )
}

const Orders = ({ orders, stateProducts }) => {

    if(!orders.length) return <EmptyPage />

    return (
        <div className="container accordions">
            <h2>Your <b>Orders</b></h2>
            <div className="tabs">
                {orders.map(order => <OrderTab key={order.id} {...{order, stateProducts}}/>)}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        stateProducts: state.products,
        orders: state.orders
    }
};

export default connect(mapStateToProps, null)(Orders);