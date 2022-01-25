import React, { useState, useEffect} from 'react';
import { connect } from 'react-redux';
import ChildrenForm from '../items/ChildrenForm';
import ProductList from '../items/ProductList';


const Home = ({ carts, children }) => {

    const [formSubmitted, setFormSubmitted] = useState(false)
    const [cartVisibleId, setCartVisibleId] = useState(1)

    useEffect(() => {
        if (children.length !== 0 && carts.length !== 0) setFormSubmitted(true)
    }, [])


    return (
        <div className='container'>
            <div className='form-wrapper'>
                <ChildrenForm
                    formSubmitted={formSubmitted}
                    setFormSubmitted={setFormSubmitted}
                    setCartVisibleId={setCartVisibleId}
                />
            </div>
            {(carts && formSubmitted) &&
                carts.filter(c => c.id === cartVisibleId)
                     .map(cart => <ProductList key={cart.id} { ...{ cart } } />)}
        </div>
    )
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        children: state.children,
    };
};

export default connect(mapStateToProps, null)(Home);