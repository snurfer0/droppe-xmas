import React from 'react';
import { fetchProduct } from '../../store/actions';
import { connect } from 'react-redux';

const Product = ({ id, quantity, fetchProduct }) => {

  React.useEffect(() => {
    fetchProduct(id)
  }, [])

  return (
    <div className="product">
      <div className="title">
        NIKON D500
      </div>
      <div className="text">
        <div className="code">Product 5485</div>
        <div className="description">
          Flagship Power, DX Agility.
        </div>
        <div className="review">
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-icon"></span>
          <span className="star-reviews">25 reviews</span>
        </div>
        <div className="price">
          $1,799.95
        </div>
        <div className="shop-actions">
          <button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> Add to Cart</button>
        </div>
      </div>
      <div className="preview">
        <svg className="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle className="circle" cx="100" cy="100" r="100" />
        </svg>
      </div>
    </div>
  );
};



const mapStateToProps = state => {
  return { carts: state.carts };
};

export default connect(
  mapStateToProps,
  { fetchProduct }
)(Product);