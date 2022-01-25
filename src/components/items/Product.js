import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import { addQuantity, deleteProductFromCart, substractQuantity } from '../../store/actions';

const ProductPreview = ({ image }) => {
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
                <img className="preview" src={image} />
            </div>
        </div>
    )
}

const Product = props =>  (
    <div className="product">
        <div className="title-wrapper">
            <div className="title"> {props.title}  ({props.category}) </div>
        </div>
        <ProductPreview image={props.image} />
        <div className="text">
            <div className="description"> {props.description} </div>
            <div className="price"> $ {props.price} </div>
            <div className="shop-actions">
                <FontAwesomeIcon
                    id='substractQuantityIcon'
                    className='pointer'
                    icon={faMinus}
                    onClick={() => props.substractQuantity(props.cart.id, props.id)}
                />
                {props.cart.products.find(p => p.productId === props.id).quantity}
                <FontAwesomeIcon
                    id='addQuantityIcon'
                    className='pointer'
                    icon={faPlus}
                    onClick={() => props.addQuantity(props.cart.id, props.id)}
                />
                <FontAwesomeIcon
                    id='addQuantityIcon'
                    className='pointer'
                    icon={faTrash}
                    onClick={() => props.deleteProductFromCart(props.cart.id, props.id)}
                />
            </div>
        </div>
    </div>
);


const mapStateToProps = state => { return { carts: state.carts } };

export default connect(mapStateToProps, { addQuantity, substractQuantity, deleteProductFromCart })(Product);