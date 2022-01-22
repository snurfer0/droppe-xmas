import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { addQuantity, substractQuantity, deleteProductFromCart } from '../../store/actions';
import { connect } from 'react-redux';
import '../../assets/scss/icons.scss'

const Product = ({ id, cartId, title, price, category, description, image, carts, addQuantity, substractQuantity, deleteProductFromCart }) => {

    return (
        <div className="product">
            <div className="title-wrapper">
                <div className="title">
                    <div>
                        {title}  ({category })
                    </div>
                </div>
            </div>
            <div>
                <img className="preview" src={image} />
            </div>
            <div className="text">
                <div className="description">
                    {description}
                </div>
                <div className="price">
                    $ {price}
                </div>
                <div className="shop-actions">
                    <FontAwesomeIcon id='substractQuantityIcon' className='pointer' icon={faMinus} onClick={() => substractQuantity(cartId, id)} />
                    { carts.find(c => c.id === cartId).products.find(p => p.productId === id).quantity }
                    <FontAwesomeIcon id='addQuantityIcon' className='pointer' icon={faPlus} onClick={() => addQuantity(cartId, id)} />
                    <button className='pointer grow_on_hover' onClick={() => deleteProductFromCart(cartId, id)}>
                        <FontAwesomeIcon icon={faTrash} style={{ cursor: "pointer" }} /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return { carts: state.carts };
};

export default connect(
    mapStateToProps,
    { addQuantity, substractQuantity, deleteProductFromCart }
)(Product);