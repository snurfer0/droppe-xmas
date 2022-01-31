import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, deleteProductFromCart, substractQuantity } from '../../store/actions';

const ProductPreview = ({ image }) => (
    <div className="wrapper">
        <div className="box">
            <img className="preview" src={image} alt="product preview" />
        </div>
    </div>
)


const Product = props => (
    <div className="product">
        <div className="title-wrapper">
            <div className="title">{props.title}  ({props.category})</div>
        </div>
        <ProductPreview image={props.image} />
        <div className="text">
            <div className="description"> {props.description} </div>
            <div className="price"> $ {props.price?.toFixed(2)} </div>
            <div className="shop-actions">
                <FontAwesomeIcon
                    data-test='sub-icon'
                    className='mr-1 pointer'
                    icon={faMinus}
                    onClick={() => props.substractQuantity(props.cart.id, props.id)}/>
                {props.cart.products.find(p => p.productId === props.id).quantity}
                <FontAwesomeIcon
                    data-test='add-icon'
                    className='ml-1 pointer'
                    icon={faPlus}
                    onClick={() => props.addQuantity(props.cart.id, props.id)}/>
                {props.carts.find(c => c.id === props.cart.id).products.find(p => p.productId === props.id).quantity > 0
                    && <FontAwesomeIcon
                        data-test='delete-icon'
                        className='pointer ml-1'
                        icon={faTrash}
                        onClick={() => props.deleteProductFromCart(props.cart.id, props.id)}/>}
            </div>
        </div>
    </div>
);


const mapStateToProps = state => { return { carts: state.carts } };

export default connect(mapStateToProps, { addQuantity, substractQuantity, deleteProductFromCart })(Product);