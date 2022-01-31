import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { confirmOrder } from '../../store/actions';
import { calculateFinalPrice } from '../../utils/calculators';
import CartProduct from '../items/CartProduct';

const isEmptyCart = cart => _.sumBy(cart.products, p => p.quantity) === 0 ? true : false

const CartProductsList = ({ cart, stateProducts }) => {
    return cart.products.map(cartProduct => {
        let stateProduct = stateProducts.find(p => p.id === cartProduct.productId)
        let { quantity } = cartProduct
        if (quantity !== 0) return <CartProduct {...{ cartProduct, stateProduct }} />
        return null
    })
}

const CartsList = ({ carts, stateProducts, children }) => {
    return carts.map((cart, index) => {
        if (!isEmptyCart(cart)) {
            return (
                <div className='child-cart'>
                    <div className='title-wrapper'>
                        <div className='title'>
                            {children[index]}&apos; cart
                        </div>
                    </div>
                   <CartProductsList {...{cart, stateProducts}} />
                </div>
            )
        }
        return null
    })
}

const OrderConfirm = ({ stateProducts, carts, children, confirmOrder }) => {

    const [finalPrice, setFinalPrice] = useState(0)
    const history = useHistory();

    useEffect(() => {
        if (stateProducts.length && carts) {
            let _finalPrice = calculateFinalPrice(carts, stateProducts)
            setFinalPrice(_finalPrice)
        }
    }, [carts, stateProducts])

    const onConfirmOrder = e => {
        e.preventDefault()
        let _carts = carts.map((cart, index) => ({ childName: children[index], ...cart }))
        let order = { carts: _carts, finalPrice: finalPrice }
        confirmOrder(order)
        history.push('/orders')
    }

    return (
        <div className="container confirm-order">
            <CartsList {...{carts, stateProducts, children}} />
            <div className='confirm-order-total'>
                <div className='confirm-order-btns'>
                    <Link to='/' className='confirm-order-btn black-btn'>Back</Link>
                    <Link to="#" className='confirm-order-btn black-btn' onClick={onConfirmOrder}>
                        Confirm<FontAwesomeIcon className='ml-1 pointer' icon={faArrowAltCircleRight} />
                    </Link>
                </div>
                <div className="price-wrapper mr-2">
                    {(finalPrice.rawTotal - finalPrice.total > 0) &&
                        <div className="old-price">$ {finalPrice.rawTotal}<span className="strikethrough"></span></div>}
                    <div className="price strikethrough">$ {finalPrice.total}</div>
                </div>
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