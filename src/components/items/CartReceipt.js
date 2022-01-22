import React from 'react';
import '../../assets/scss/receipt.scss';
import _ from 'lodash'
import { Link } from 'react-router-dom';

const checkDiscount = (products, cartProducts) => {
    console.log(cartProducts);
}

const CartReceipt = ({ products, cart }) => {

    const [total, setTotal] = React.useState(-1)

    React.useEffect(() => {
        let total = _.sumBy(products, p => {
            let cartProduct = cart.products.find(c => c.productId === p.id)
            const { quantity } = cartProduct
            return p.price * quantity
        })
        setTotal(total)
    }, [total, cart, products])

    return (
        <>
            <div className="receipt">
                <table className="receipt-table">
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
                            products.map(p => {
                                let cartProduct = cart.products.find(c => c.productId === p.id)
                                const { quantity } = cartProduct
                                if (quantity !== 0) {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.title}</td>
                                            <td className="text-center">{quantity}</td>
                                            <td className="price">$ {p.price.toFixed(2)}</td>
                                            <td className="total">$ {(quantity * p.price).toFixed(2)}</td>
                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3">Total:</td>
                            <td className="total">$ {total.toFixed(2)}</td>
                        </tr>
                        <tr>
                            <td className="total">
                                <Link to='/checkout'>Checkout</Link>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default CartReceipt;
