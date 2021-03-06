import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateCartFinalPrice } from '../../utils/calculators.js';

const CartReceiptTableRow = ({ cartProduct, quantity }) => (
    <tr key={cartProduct.id}>
        <td>{cartProduct.title}</td>
        <td>{quantity}</td>
        <td>$ {cartProduct.price.toFixed(2)}</td>
        <td>$ {(quantity * cartProduct.price).toFixed(2)}</td>
    </tr>
)


const CartReceiptTableHeader = () =>  (
    <thead>
        <tr>
            <th>Item Details</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
        </tr>
    </thead>
)


const CartReceiptTableBody = ({ cart, cartProducts, stateProducts }) => (
    <tbody className="table-hover">
        {cartProducts.map(cartProduct => {
            let product = stateProducts.find(p => p.id === cartProduct.id)
            let { quantity } = cart.products.find(p => p.productId === cartProduct.id)
            if (quantity > 0) return <CartReceiptTableRow key={product.id} {...{ cartProduct, quantity }} />
            return null
        })}
    </tbody>
)


const CartReceiptTableFooter = ({ finalPrice }) =>(
    <tfoot className='table-footer'>
        <tr>
            <td colSpan="3">Cart Total:</td>
            <td>$ {finalPrice}</td>
        </tr>
    </tfoot>
)

const CartReceipt = ({ cart, stateProducts, carts }) => {

    const [cartProducts, setCartProducts] = useState(null)
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        if (stateProducts.length) {
            let ids = cart.products.map(p => p.productId)
            let _cartProducts = stateProducts.filter(p => ids.includes(p.id))
            setCartProducts(_cartProducts)
        }
    }, [stateProducts, cart])


    useEffect(() => {
        if (stateProducts.length) {
            let fp = calculateCartFinalPrice(cart.id, carts, stateProducts)
            setFinalPrice(fp)
        }
    }, [cart, carts, cartProducts, stateProducts])

    if (!cartProducts) return null

    return (
        <div className='cart-receipt'>
            <table className="table">
                <CartReceiptTableHeader />
                <CartReceiptTableBody {...{ stateProducts, cart, cartProducts }} />
                <CartReceiptTableFooter {...{ finalPrice }} />
            </table>
            <Link to='/order-confirm' id='cart-confirm-btn' className='black-btn'>
                Confirm<FontAwesomeIcon className='ml-1 pointer' icon={faArrowAltCircleRight} />
            </Link>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        stateProducts: state.products
    };
};

export default connect(mapStateToProps)(CartReceipt);