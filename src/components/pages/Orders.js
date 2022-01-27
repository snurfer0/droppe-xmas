import React from 'react';
import { connect } from 'react-redux';

const CartProduct = ({ product, stateProducts }) => {
    let sp = stateProducts.find(p => p.id === product.productId)
    return (
        <li key={product.productId}>
            <div className='ordered-product-container'>
                <div className='ordered-product-info'>
                    <div className='product-image'>
                        <img src={sp.image} />
                    </div>
                    <div className='product-data'>
                        <span>{sp.title}</span>
                        <small>{sp.category}</small>
                        <small>$ {sp.price.toFixed(2)}</small>
                        <small>Qty. {product.quantity}</small>
                    </div>

                </div>
                <div className='ordered-product-price'>
                    $ {(sp.price * product.quantity).toFixed(2)}
                </div>
            </div>
        </li>
    )
}

const OrderCarts = ({ cart, stateProducts }) => {
    return (
        <ul key={cart.id}>
            <h3>{cart.childName}'s Items</h3>
            {cart.products.map(product => <CartProduct {...{product, stateProducts}} />)}
        </ul>
    )
}

const Orders = ({ orders, stateProducts }) => {
    return (
        <div className="container accordions">
            <h2>Your <b>Orders</b></h2>
            <div className="tabs">
                {orders.map(order => {
                    return (
                        <div className="tab mt-1">
                            <input type="checkbox" id={order.id} />
                            <label className="tab-label" for={order.id}>Order #{order.id} <small>PROCESSING..</small></label>
                            <div className="tab-content">
                                {order.carts.map(cart => <OrderCarts {...{cart, stateProducts}} />)}
                                <div className="price-wrapper mr-2">
                                    {(order.finalPrice.rawTotal - order.finalPrice.total > 0) &&
                                        <div className="old-price">$ {order.finalPrice.rawTotal }<span className="strikethrough"></span></div>}
                                    <div className="price strikethrough">$ {order.finalPrice.total}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
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