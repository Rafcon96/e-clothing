import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_99v6UKw4jNUuKwW6lhXBLveF00EShdcoeJ';
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }
    
    return(
        <StripeCheckout 
            label='Pay Now' 
            name='CRWN Clothing LTD.'
            billingAddress
            shippingAddress
            image ='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount= {priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey= {publishableKey}
        />
    );
}

export default StripeCheckoutButton;