import React from 'react';
import Product from './Product';

const ProductList = ({products}) => {
  return (
    <div className='wrapper'>
      {products.map((p, index) => {
        return <Product {...p} key={index} />
      })}
    </div>
  );
};

export default ProductList;
