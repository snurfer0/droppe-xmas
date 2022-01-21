import React from 'react';
import '../../assets/css/carts.scss';
import Cart from './Cart';
import Loading from '../animations/Loading';

const CartList = ({ carts, childrenNames }) => {

    const cols = ['one', 'two', 'three', 'four', 'five']

    if (!carts) return <Loading />

    return (
        <div className='row'>
            {childrenNames.map((name, index) => {
                return (
                    <Cart childName={name} cart={carts[index]} col={cols[index]} key={index} />
                )
            })}
        </div>
    )
}

export default CartList;
