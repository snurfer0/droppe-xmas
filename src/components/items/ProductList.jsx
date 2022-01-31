import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CartReceipt from './CartReceipt';
import Product from './Product';

const ProductList = ({ cart, carts, stateProducts }) => {

  const [receiptVisible, setReceiptVisible] = useState(false)

  useEffect(() => {
    if (cart) {
      const _cartProducts = carts.find(c => c.id === cart.id).products
      const _totalQuantity = _.sumBy(_cartProducts, _cp => _cp.quantity)
      
      if (_totalQuantity > 0) {
        setReceiptVisible(true)
      } else {
        setReceiptVisible(false)
      }
    }
  }, [cart, carts])

  return <>
    <div className='products-inline'>
      {cart && cart.products.map(p => {
        let product = stateProducts.find(_p => _p.id === p.productId)
        return <Product key={product.id} cart={cart} {...product} />
      })}
    </div>
    {receiptVisible && <CartReceipt cart={cart} />}
  </>
}


const mapStateToProps = state => {
  return {
    carts: state.carts,
    stateProducts: state.products
  };
};

export default connect(mapStateToProps, null)(ProductList);