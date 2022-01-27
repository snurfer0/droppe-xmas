import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateCartFinalPrice } from '../../utils/calculators.js';

const CartReceiptTableRow = ({ cartProduct, quantity }) => {
    return (
        <tr key={cartProduct.id}>
            <td>{cartProduct.title}</td>
            <td>{quantity}</td>
            <td>$ {cartProduct.price.toFixed(2)}</td>
            <td>$ {(quantity * cartProduct.price).toFixed(2)}</td>
        </tr>
    )
}

const CartReceiptTableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Item Details</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
            </tr>
        </thead>
    )
}

const CartReceiptTableBody = ({ cart, cartProducts, stateProducts }) => {
    return (
        <tbody className="table-hover">
            {cartProducts.map(cartProduct => {
                let product = stateProducts.find(p => p.id === cartProduct.id)
                let { quantity } = cart.products.find(p => p.productId === cartProduct.id)
                if (quantity > 0) return <CartReceiptTableRow key={product.id} {...{ cartProduct, quantity }} />
            })}
        </tbody>
    )
}

const CartReceiptTableFooter = ({ finalPrice }) => {
    return (
        <tfoot className='table-footer'>
            <tr>
                <td colSpan="3">Cart Total:</td>
                <td>
                    $ {finalPrice}
                </td>
            </tr>

        </tfoot>
    )
}

const CartReceipt = props => {

    let { cart, stateProducts, carts } = props

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
    }, [cart, cartProducts])

    if (!cartProducts) return <></>

    return (
        <>
            <table className="table">
                <CartReceiptTableHeader />
                <CartReceiptTableBody {...{ stateProducts, cart, cartProducts }} />
                <CartReceiptTableFooter {...{ finalPrice }} />
            </table>
            <Link to='/order-confirm' className='black-btn cart-confirm-btn'>
                Confirm<FontAwesomeIcon className='ml-1 pointer' icon={faArrowAltCircleRight} />
            </Link>
        </>
    );
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        stateProducts: state.products
    };
};

export default connect(mapStateToProps)(CartReceipt);