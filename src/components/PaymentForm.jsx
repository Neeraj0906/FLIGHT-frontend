// src/components/PaymentForm.jsx
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return; // Stripe.js has not yet loaded.
        }

        const cardElement = elements.getElement(CardElement);
        const { error, token } = await stripe.createToken(cardElement);

        if (error) {
            console.error(error);
        } else {
            onPaymentSuccess(token); // Call the function passed down
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '100%', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' ,height:"230px"}}>
            <h2 style={{ textAlign: 'center',fontWeight:"bold",fontSize:"30px",marginBottom:"30px" }}>Payment Information</h2>
            <div style={{ marginBottom: '10px' }}>
                <CardElement 
                    options={{
                        style: {
                            base: {
                                color: '#32325d',
                                fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                                fontSmoothing: 'antialiased',
                                fontSize: '18px',
                                lineHeight: '24px',
                                padding: '10px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            },
                            invalid: {
                                color: '#fa755a',
                                iconColor: '#fa755a',
                            },
                        },
                    }}
                />
            </div>
            <button type="submit" disabled={!stripe} style={{ width: '100%', padding: '10px', backgroundColor: '#6772e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer',marginTop:"10px" }}>
                Pay Now
            </button>
        </form>
    );
};

export default PaymentForm;