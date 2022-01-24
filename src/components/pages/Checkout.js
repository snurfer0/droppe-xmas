import _ from 'lodash'
import React from 'react';
import { connect } from 'react-redux';

const isEmptyCart = cart => _.sumBy(cart.products, p => p.quantity) === 0 ? true : false

const FinalReceipt = ({ products, carts, children }) => {

    const [totalDiscount, setTotalDiscount] = React.useState(0)

    return (
        <>
            <div className="receipt container">
                    {
                    carts.map((cart, index) => {
                        if (!isEmptyCart(cart)) {
                            return (
                                    <table className="receipt-table" key={cart.id}>
                                    <thead >
                                        <tr>
                                            <th>Item Details for {children[index]}</th>
                                            <th>Quantity</th>
                                            <th className="price">Price</th>
                                            <th className="total">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.products.map(product => {
                                                let { id, price, title } = products.find(p => p.id === product.productId)
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
                                            })
                                        }
                                    </tbody>
                                    
                                </table>
                            )
                        }
                        })
                    
                }
                <tfoot>
                    <tr>
                        <td colSpan="3">Total:</td>
                        <td className="total">$ </td>
                    </tr>
                    <tr>
                        <td className="total">
                            <button type="">Pay</button>
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
        products: state.products
    }
};

export default connect(mapStateToProps, null)(FinalReceipt);