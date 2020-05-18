import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = "pk_test_oxCnl0cYLJnRf7XJWxZwBaHO00jLOsOCys";

	const onToken = (token) => {
		console.log(token);
		alert("Payment Successfull");
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="Ecommerce Co."
			billingAddress
			shippingAddress
			amount={priceForStripe}
			stripeKey={publishableKey}
			description={`Your total is $${price}`}
			panelLabel="Pay Now"
			token={onToken}
		/>
	);
};

export default StripeButton;
