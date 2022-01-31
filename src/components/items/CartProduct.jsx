import React from 'react'

const CartProduct = ({ cartProduct, stateProduct }) =>  (
    <div className='ordered-product-container'>
        <div className='ordered-product-info'>
            <div className='product-image'>
                <img src={stateProduct.image} alt="product preview" />
            </div>
            <div className='product-data'>
                <span className='title'>{stateProduct.title}</span>
                <small>{stateProduct.category}</small>
                <small>$ {stateProduct.price.toFixed(2)}</small>
                <small>Qty. {cartProduct.quantity}</small>
            </div>
        </div>
        <div className='ordered-product-price'>
            $ {(stateProduct.price * cartProduct.quantity).toFixed(2)}
        </div>
    </div>
)

export default CartProduct
