import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { calculateFinalPrice } from '../../utils/calculators';
import { Link } from 'react-router-dom';
import { confirmOrder } from '../../store/actions';
import { useHistory } from 'react-router-dom';

const isEmptyCart = cart => _.sumBy(cart.products, p => p.quantity) === 0 ? true : false

const OrderConfirmTableHead = ({ children, index }) => (
    <thead >
        <tr>
            <th>{children[index]}'s Items</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Item Total</th>
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
                        <td className='td-title'>{title}</td>
                        <td>{quantity}</td>
                        <td>$ {price.toFixed(2)}</td>
                        <td>$ {(quantity * price).toFixed(2)}</td>
                    </tr>
                )
            }
        })}
    </tbody>
)



const OrderConfirm = ({ stateProducts, carts, children, confirmOrder }) => {

    const [finalPrice, setFinalPrice] = useState(0)
    const history = useHistory();

    useEffect(() => {
        if (stateProducts.length && carts) {
            let _finalPrice = calculateFinalPrice(carts, stateProducts)
            console.log(_finalPrice);
            setFinalPrice(_finalPrice)
        }
    }, [carts])

    const onConfirmOrder = e => {
        e.preventDefault()
        
        let _carts = carts.map((cart, index) => {
            return { childName: children[index], ...cart }
        })

        let order = {
            carts: _carts,
            finalPrice: finalPrice
        }

        confirmOrder(order)
        history.push('/orders')
    }

    return (
        <div className="container">
            {carts.map((cart, index) => {
                if (!isEmptyCart(cart)) {
                    return (
                        <table className="table mb-3" key={cart.id}>
                            <OrderConfirmTableHead {...{ children, index }} />
                            <OrderConfirmTableBody {...{ cart, stateProducts }} />
                        </table>
                    )
                }
            })}
            <div className='order-confirm-total'>
                <div className="price-wrapper mr-2">
                    {(finalPrice.rawTotal - finalPrice.total > 0) &&
                        <div className="old-price">$ {finalPrice.rawTotal}<span className ="strikethrough"></span></div>}
                    <div className="price strikethrough">$ {finalPrice.total}</div>
                </div>
                <button className='confirm-order-btns black-btn' onClick={onConfirmOrder}>Confirm Order</button>
                <Link to='/' className='confirm-order-btns black-btn'>Back</Link>
            </div>
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

export default connect(mapStateToProps, { confirmOrder })(OrderConfirm);