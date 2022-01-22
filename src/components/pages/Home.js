import React from 'react';
import { connect } from 'react-redux';

import ChildrenForm from '../items/ChildrenForm';
import ProductList from '../items/ProductList';

const Home = ({ carts, children, products }) => {

    const [formSubmitted, setFormSubmitted] = React.useState(false)
    const [cartVisibleId, setCartVisibleId] = React.useState(carts[0]?.id || -1)

    React.useEffect(() => {
        if (children.length !== 0 && carts.length !== 0 && products.length !== 0) {
            setFormSubmitted(true)
        }
    }, [])

    React.useEffect(() => {

    }, [carts, products])

    React.useEffect(() => {
        console.log(carts);
        setCartVisibleId(carts[0]?.id)
    }, [carts])

    return (
        <div className='container'>
            <div className='form-wrapper'>
                <ChildrenForm
                    formSubmitted={formSubmitted}
                    setFormSubmitted={setFormSubmitted}
                    setCartVisibleId={setCartVisibleId}
                    />
            </div>
            {(carts && formSubmitted) && carts.filter(c => c.id === cartVisibleId).map(cart => <ProductList key={cart.id} cart={cart} /> )}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        children: state.children,
        products: state.products
    };
};

export default connect(
    mapStateToProps,
    {  }
)(Home);