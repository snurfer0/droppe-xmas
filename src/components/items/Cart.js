import React from 'react';
import Loading from '../animations/Loading';
import ProductList from './ProductList';

const CartDescription = ({ childName }) => {
  return (
    <div>
      Name: {childName}
    </div>
  )
}


const Cart = ({ childName, cart, col }) => {

  if (!cart) return <></>

  return (
    <div className={`${col}`}>
      <CartDescription childName={childName} />
      <ProductList products={cart.products} />
    </div>
  );
};

export default Cart;
