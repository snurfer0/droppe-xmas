import React from 'react';
import { connect } from 'react-redux';
import '../../assets/scss/receipt.scss';

const checkTotalDiscount = (products, cartProducts) => {
    console.log(cartProducts);
}

const FinalReceipt = ({ products, carts }) => {

    const [totalDiscount, setTotalDiscount] = React.useState(0)



    return (
        <>
            <div className="receipt">
                <table className="receipt-table">
                    {
                        carts.map(cart => {
                            return (
                                <>
                                    <thead>
                                        <tr>
                                            <th>Item Details</th>
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
                                                if (id) {
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
                                </>
                            )

                        })
                    }
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total:</td>
                            <td className="total">$ </td>
                        </tr>
                        <tr>
                            <td className="total">
                                <button id="modal-button-open">Pay</button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};


const mapStateToProps = state => {
    return {
        carts: state.carts,
        children: state.children,
        products: state.products.products,
    };
};

export default connect(
    mapStateToProps,
    {}
)(FinalReceipt);