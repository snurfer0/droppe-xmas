import { faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { connect } from 'react-redux';
import '../../assets/scss/icons.scss';
import { addQuantity, deleteProductFromCart, substractQuantity } from '../../store/actions';
import { checkPriceForDiscount } from '../../utils';
import Loading from '../animations/Loading';

const Product = ({ id, cartId, title, category, description, image, carts, products, addQuantity, substractQuantity, deleteProductFromCart }) => {

    const [price, setPrice] = React.useState(null)
    
    React.useEffect(() => {
        let _price = checkPriceForDiscount(carts, products, id)
        console.log("Cart changed", price);
        setPrice(_price)
    }, [carts])

    if(!price) return <Loading />

    return (
        <div className="product">
            <div className="title-wrapper">
                <div className="title">
                    <div>
                        {title}  ({category})
                    </div>
                </div>
            </div>
            {price.discounted === true 
                ? <>
                    <div className="wrapper">
                        <div className="box">
                            <div className="ribbon text-center">
                                -{price.discountInPercentage}% for <br />{ price.matches } item Discount
                            </div>
                            <img className="preview" src={image} />
                        </div>
                    </div>
                </>
                : <>
                    <div className="wrapper">
                        <div className="box">
                            <img className="preview" src={image} />
                        </div>
                    </div>
                </>
            }
            
            
            <div className="text">
                <div className="description">
                    {description}
                </div>
                <div className="price">
                    $ {price.rawPrice}
                </div>
                <div className="shop-actions">
                    <FontAwesomeIcon id='substractQuantityIcon' className='pointer' icon={faMinus} onClick={() => substractQuantity(cartId, id)} />
                    {carts.find(c => c.id === cartId).products.find(p => p.productId === id).quantity}
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
    return {};
};

export default connect(
    mapStateToProps,
    { addQuantity, substractQuantity, deleteProductFromCart }
)(Product);