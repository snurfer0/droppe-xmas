import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addQuantity, deleteProductFromCart, fetchProduct, substractQuantity } from '../../store/actions';

import Loading from './Loading';

const ProductPreview = ({ product }) => {
    // if (discount.discounted) {
    //     return (
    //         <div className="wrapper">
    //             <div className="box">
    //                 <div className="ribbon text-center">
    //                     -{discount.matches * 10}% for <br />{discount.matches} item Discount
    //                 </div>
    //                 <img className="preview" src={product.image} />
    //             </div>
    //         </div>
    //     )
    // }

    return (
        <div className="wrapper">
            <div className="box">
                <img className="preview" src={product.image} />
            </div>
        </div>
    )
}

const Product = ({ productId, cart, carts, products, fetchProduct, addQuantity, substractQuantity, deleteProductFromCart }) => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        let _product = products.find(p => p.id === productId)
        if (!_product) fetchProduct(productId)
    }, [])

    useEffect(() => {
        let _product = products.find(p => p.id === productId)
        if (_product) setProduct(_product)
    }, [products])

    if (!product) return <Loading />
    

    return (
        <div className="product">
            <div className="title-wrapper">
                <div className="title">
                    {product.title}  ({product.category})
                </div>
            </div>
            <ProductPreview {...{ product }} />
            <div className="text">
                <div className="description">
                    {product.description}
                </div>
                <div className="price">
                    $ {product.price}
                </div>
                <div className="shop-actions">
                    <FontAwesomeIcon id='substractQuantityIcon' className='pointer' icon={faMinus} onClick={() => substractQuantity(cart.id, productId)} />
                    {cart.products.find(p => p.productId === productId).quantity}
                    <FontAwesomeIcon id='addQuantityIcon' className='pointer' icon={faPlus} onClick={() => addQuantity(cart.id, productId)} />
                    <button className='pointer grow_on_hover' onClick={() => deleteProductFromCart(cart.id, productId)}>
                        <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        carts: state.carts,
        products: state.products,
    };
};

export default connect(
    mapStateToProps,
    { addQuantity, substractQuantity, deleteProductFromCart, fetchProduct }
)(Product);