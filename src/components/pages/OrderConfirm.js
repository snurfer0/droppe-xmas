import _ from 'lodash'
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { calculateFinalPrice } from '../../utils/calculators';

const isEmptyCart = cart => _.sumBy(cart.products, p => p.quantity) === 0 ? true : false


const OrderConfirm = ({ stateProducts, carts, children }) => {

    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        if (stateProducts.length && carts) {
            let _finalPrice = calculateFinalPrice(carts, stateProducts)
            setFinalPrice(_finalPrice)
        }
    }, [])

    return (
        <>
            <div className="receipt container">
                    {carts.map((cart, index) => {
                        if (!isEmptyCart(cart)) {
                            return (
                                    <table className="receipt-table" key={cart.id}>
                                    <thead >
                                        <tr>
                                            <th>{children[index]}'s Items</th>
                                            <th>Quantity</th>
                                            <th className="price">Price</th>
                                            <th className="total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cart.products.map(product => {
                                                let { id, price, title } = stateProducts.find(p => p.id === product.productId)
                                                let { quantity } = product
                                                // let discountedPrice = discountForProduct(carts, cart.id, id)
                                                if (id && quantity !== 0) {
                                                    return (
                                                        <tr key={id}>
                                                            <td>{title}</td>
                                                            <td className="text-center">{quantity}</td>
                                                            <td className="price">$ {price.toFixed(2)}</td>
                                                            <td className="total">$ {(quantity * price).toFixed(2)}</td>
                                                        </tr>
                                                    )
                                                }
                                            })}
                                    </tbody>
                                </table>
                            )
                        }
                    })
                }
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
                    
            </div>
        </>
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