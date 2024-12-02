// src/components/PaymentForm.jsx
import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentForm = ({ onPaymentSuccess }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        if (!stripe || !elements) {
            return; // Stripe.js has not yet loaded.
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
            setLoading(false);
        } else {
            onPaymentSuccess(paymentMethod); // Pass the payment method to the parent component
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px', padding: '20px', backgroundColor: '#ffffff', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h2 style={{ textAlign: 'center', color: '#00796b',fontSize:"20px" }}>Payment Details</h2>
            <CardElement style={{
                padding: '10px',
                borderRadius: '5px',
                border: '1px solid #ccc',
                fontSize: '16px'
            }} />
            {error && <div style={{ color: 'red', textAlign: 'center' }}>{error}</div>}
            <button type="submit" disabled={!stripe || loading} style={{
                padding: '10px',
                backgroundColor: '#007bff',
                color: '#fff',
                borderRadius: '5px',
                border: 'none',
                cursor: 'pointer',
                fontWeight: 'bold'
            }}>
                {loading ? "Processing..." : "Pay Now"}
            </button>
        </form>
    );
};

export default PaymentForm;