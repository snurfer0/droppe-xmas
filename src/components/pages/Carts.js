import React from 'react';
import CartList from '../items/CartList';
import { fetchCarts } from '../../store/actions';
import { connect } from 'react-redux';

const Carts = ({ carts, location, match, fetchCarts }) => {

    const { childrenNames } = location.state

    console.log(location.state);

    React.useEffect(() => {
        fetchCarts()
    }, [])

    return (
      <CartList carts={carts} childrenNames={childrenNames} />
  );
};

const mapStateToProps = state => {
    return { carts: state.carts };
};

export default connect(
    mapStateToProps,
    { fetchCarts }
)(Carts);