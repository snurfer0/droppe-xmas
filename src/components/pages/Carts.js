import React from 'react';
import CartList from '../items/CartList';
import { fetchCarts } from '../../store/actions';
import { connect } from 'react-redux';

const Carts = ({ carts, location, match, fetchCarts }) => {

    console.log(location)
    console.log(match)

    React.useEffect(() => {
        fetchCarts()
    }, [])

    return (
      <CartList carts={carts} />
  );
};

const mapStateToProps = state => {
    return { carts: state.carts };
};

export default connect(
    mapStateToProps,
    { fetchCarts }
)(Carts);