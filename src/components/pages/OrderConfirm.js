import _ from 'lodash'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { calculateFinalPrice } from '../../utils/calculators';

const isEmptyCart = cart => _.sumBy(cart.products, p => p.quantity) === 0 ? true : false

const OrderConfirmTableHead = ({ children, index }) => (
    <thead >
        <tr>
            <th className="text-left">{children[index]}'s Items</th>
            <th className="text-left">Quantity</th>
            <th className="text-left">Price</th>
            <th className="text-left">Total</th>
        </tr>
    </thead>
)

const OrderConfirmTableBody = ({ cart, stateProducts }) => (
    <tbody>
        {cart.products.map(product => {
            let { id, price, title } = stateProducts.find(p => p.id === product.productId)
            let { quantity } = product
            if (id && quantity !== 0) {
                return (
                    <tr key={id}>
                        <td className="text-left">{title}</td>
                        <td className="text-left">{quantity}</td>
                        <td className="text-left">$ {price.toFixed(2)}</td>
                        <td className="text-left">$ {(quantity * price).toFixed(2)}</td>
                    </tr>
                )
            }
        })}
    </tbody>
)

const OrderConfirmTableFooter = ({ finalPrice }) => (
    <tfoot>
        <tr>
            <td colSpan="3">Total:</td>
            <td className="total">$ {finalPrice}</td>
        </tr>
        <tr>
            <td className="total">
                <button className='black-btn'>Confirm Order</button>
            </td>
        </tr>
    </tfoot>
)


const OrderConfirm = ({ stateProducts, carts, children }) => {

    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        if (stateProducts.length && carts) {
            let _finalPrice = calculateFinalPrice(carts, stateProducts)
            setFinalPrice(_finalPrice)
        }
    }, [])

    return (
        <div className="container">
                {carts.map((cart, index) => {
                    if (!isEmptyCart(cart)) {
                        return (
                            <table className="table mb-3" key={cart.id}>
                                <OrderConfirmTableHead {...{children, index}} />
                                <OrderConfirmTableBody {...{cart, stateProducts}} />
                            </table>
                        )
                    }
                })
            }
            <OrderConfirmTableFooter {...{finalPrice}} />
        </div>
    );
};


const mapStateToProps = state => {
    return {
        carts: state.carts,
        children: state.children,
        stateProducts: state.products
    }
};

export default connect(mapStateToProps, null)(OrderConfirm);