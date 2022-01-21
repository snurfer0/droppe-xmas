import React from 'react';
import '../../assets/css/carts.scss'

const CartList = () => {
    return (
        <div class="wrapper">

            <div class="product">
                <div class="title">
                    AF VR ZOOM-NIKKOR 80-400MM F/4.5-5.6D ED
                </div>

                <div class="text">
                    <div class="code">Product 1996</div>
                    <div class="description">
                        The ultimate medium to super-telephoto zoom lens.
                    </div>
                    <div class="review">
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon star-disable"></span>
                        <span class="star-reviews">84 reviews</span>
                    </div>
                    <div class="price">
                        $1,849.95
                    </div>
                    <div class="shop-actions">
                        <button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> Add to Cart</button>
                    </div>
                </div>

               

            </div>


            <div class="product">
                <div class="title">
                    NIKON D500
                </div>

                <div class="text">
                    <div class="code">Product 5485</div>
                    <div class="description">
                        Flagship Power, DX Agility.
                    </div>
                    <div class="review">
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-icon"></span>
                        <span class="star-reviews">25 reviews</span>
                    </div>
                    <div class="price">
                        $1,799.95
                    </div>
                    <div class="shop-actions">
                        <button><img src="https://cdn0.iconfinder.com/data/icons/typicons-2/24/shopping-cart-20.png" /> Add to Cart</button>
                    </div>
                </div>

                <div class="preview">
                    <svg class="svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                        <circle class="circle" cx="100" cy="100" r="100" />
                    </svg>
                </div>


            </div>


        </div>
    );
};

export default CartList;
