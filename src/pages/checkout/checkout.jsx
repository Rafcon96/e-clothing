import React from 'react';
import { connect } from 'react-redux';
import {  createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

import './checkout.styles.scss';
//import CartItem from '../../components/cart-item/cart-item';

const CheckoutPage = ({ cartItems, total }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem => 
               ( <CheckoutItem key={cartItem.id} cartItem= {cartItem} />) )
        }
        <div className="total"> TOTAL: ${total}</div>
        <div className="test-warning">
            *Pease use the following test credit card for payment* 
            <br /> 
            4242 4242 4242 4242 - exp: 01/20 - CVV: 123
        </div>
        <StripeCheckoutButton price={total} />
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
}) 

export default connect(mapStateToProps)(CheckoutPage);