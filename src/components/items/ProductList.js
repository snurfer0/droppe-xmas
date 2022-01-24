import React from 'react';
import { connect } from 'react-redux';
import Loading from './Loading';
import CartReceipt from './CartReceipt';
import Product from './Product';

const ProductList = ({ cart }) => {

  if (!cart) return <Loading />

  return (
    <>
      <div className='products-grid'>
        {cart && cart.products.map(p => <Product key={p.productId} cart={cart} {...p} />)}
      </div>
      <CartReceipt cart={cart} />
    </>
  )
}


const mapStateToProps = state => {
  return { carts: state.carts };
};

export default connect(mapStateToProps, null)(ProductList);