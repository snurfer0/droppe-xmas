import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateCartFinalPrice } from '../../utils/calculators.js';

const CartReceiptTableRow = ({ cartProduct, quantity }) => {
    return (
        <tr key={cartProduct.id}>
            <td className="text-left">{cartProduct.title}</td>
            <td className="text-left">{quantity}</td>
            <td className="text-left">$ {cartProduct.price}</td>
            <td className="text-left">$ {(quantity * cartProduct.price).toFixed(2)}</td>
        </tr>
    )
}

const CartReceiptTableHeader = () => {
    return (
        <thead>
            <tr>
                <th className="text-left">Item Details</th>
                <th className="text-left">Quantity</th>
                <th className="text-left">Price</th>
                <th className="text-left">Total</th>
            </tr>
        </thead>
    )
}

const CartReceiptTableBody = ({ cart, cartProducts, stateProducts }) => {
    return (
        <tbody class="table-hover">
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
                <td colSpan="2">Cart Total:</td>
                <td>$ {finalPrice}</td>
                <td>
                    <Link to='/checkout' className='grow_on_hover black-btn'>Checkout</Link>
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
        <table className="table">
            <CartReceiptTableHeader />
            <CartReceiptTableBody {...{ stateProducts, cart, cartProducts }} />
            <CartReceiptTableFooter {...{ finalPrice }} />
        </table>
    );
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        stateProducts: state.products
    };
};

export default connect(mapStateToProps)(CartReceipt);