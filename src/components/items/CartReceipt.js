import _ from 'lodash';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { calculateCartFinalPrice } from '../../utils';


const CartReceiptTableRow = ({ product, price, quantity  }) => {
    return (
        <tr key={product.id}>
            <td>{product.title}</td>
            <td className="text-center">{quantity}</td>
            <td className="price">$ {price.rawPrice}</td>
            {
                price.discounted ?
                (<>
                    <td className="total"><>$ {(quantity * price.finalPrice).toFixed(2)}</></td>
                    <td className="discount text-center"> -{price.discountInPercentage.toFixed(0)}%</td>
                </>)
                :
                (<>
                    <td className="total">$ {(quantity * price.rawPrice).toFixed(2)}</td>
                    <td className="discount text-center">-0%</td>
                </>)
            }
        </tr>
    )
}

const CartReceipt = ({ products, carts, cart }) => {

    const [cartProducts, setCartProducts] = useState(null)
    const [finalPrice, setFinalPrice] = useState(0)

    useEffect(() => {
        if (products) {
            let ids = cart.products.map(p => p.productId)
            let _cartProducts = products.filter(p => ids.includes(p.id))
            setCartProducts(_cartProducts)
        }
    }, [products, cart])
    

    useEffect(() => {
        if (cartProducts) {
            let fp = calculateCartFinalPrice(carts, products)
            if (finalPrice) setFinalPrice(fp)
        }
    }, [cart, cartProducts])

    if (!cartProducts) return <></>

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
                            // cartProducts.map(product => {
                            //     let { quantity } = cart.products.find(c => c.productId === product.id)
                            //     let price = checkPriceForDiscount(carts, product)
                            //     if (quantity > 0) {
                            //         return <CartReceiptTableRow key={product.id} {...{ product, price, quantity }} />
                            //     }
                            // })
                        }
                    </tbody>
                    <tfoot className='table-footer'>
                        <tr className='text-center mt-2'>
                            <td colSpan="3" className='text-center'>Total:</td>
                            <td className="total text-center">$ {finalPrice.toFixed(2)}</td>
                            <td>
                                <Link to='/checkout' className='grow_on_hover black-btn' type="submit">Checkout</Link>
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
        products: state.products
    };
};

export default connect(mapStateToProps)(CartReceipt);