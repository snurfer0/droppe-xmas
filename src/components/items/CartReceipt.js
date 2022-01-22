import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import '../../assets/scss/receipt.scss';
import { checkPriceForDiscount } from '../../utils';

const CartReceipt = ({ products, carts, cart }) => {

    const [total, setTotal] = React.useState(-1)
    const [totalWithDiscount, setTotalWithDiscount] = React.useState(-1)


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
                            <th className="discount text-center">Discount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(p => {
                                let cartProduct = cart.products.find(c => c.productId === p.id)
                                const { quantity } = cartProduct
                                let price = checkPriceForDiscount(carts, products, p.id)
                                if (quantity !== 0) {
                                    return (
                                        <tr key={p.id}>
                                            <td>{p.title}</td>
                                            <td className="text-center">{quantity}</td>
                                            <td className="price">$ {p.price.toFixed(2)}</td>
                                            {price.discounted ? (
                                                <>
                                                    <td className="total"><>$ {(quantity * price.finalPrice).toFixed(2)}</></td>
                                                    <td className="discount text-center"> -{price.discountInPercentage.toFixed(0)}%</td>
                                                </>
                                            ) : (
                                                <>
                                                    <td className="total">$ {(quantity * p.price).toFixed(2)}</td>
                                                        <td className="discount text-center">-0%</td>
                                                </>
                                            )
                                            }

                                        </tr>
                                    )
                                }
                            })
                        }
                    </tbody>
                    <tfoot className='table-footer'>
                        <tr className='text-center mt-2'>
                            <td colSpan="3" className='text-center'>Total:</td>
                            <td className="total text-center">$ {total.toFixed(2)}</td>
                            <td>
                                <Link to='/checkout' className='grow_on_hover black-btn' type="submit">Checkout</Link>
                            </td>
                        </tr>
                        <tr>
                            
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    );
};

export default CartReceipt;
