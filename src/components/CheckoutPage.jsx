// src/components/CheckoutPage.jsx
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { useLocation } from 'react-router-dom';

const CheckoutPage = () => {
    const location = useLocation();
    const bookingDetails = location.state?.bookingDetails; // Retrieve booking details from state

    const handlePaymentSuccess = async (token) => {
        // Call your backend API to process the payment with the token
        const response = await fetch('https://flight-backend-twe1.onrender.com/api/payments/create-payment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                amount: 5000, // Amount in cents ($50.00)
                currency: 'usd',
                source: token.id,
                // Include additional parameters if needed for your payment API.
            }),
        });

        const paymentResult = await response.json();
        if (paymentResult.error) {
            console.error(paymentResult.error);
            alert('Payment failed: ' + paymentResult.error);
        } else {
            console.log('Payment successful:', paymentResult);
            alert(`Payment successful! Charge ID: ${paymentResult.charge.id}, Amount: $${paymentResult.charge.amount / 100}`);
            
            // Optionally display a confirmation message or navigate to another page.
        }
    };

    return (
        <div>
            <h1>Checkout</h1>
            
            {bookingDetails && (
                <div>
                    <h2>Booking Details</h2>
                    <p>Flight ID: {bookingDetails.flightId}</p>
                    <p>Adults: {bookingDetails.adults}</p>
                    <p>Children: {bookingDetails.children}</p>
                    <p>Departure Date: {bookingDetails.departureDate}</p>
                </div>
            )}

            <PaymentForm onPaymentSuccess={handlePaymentSuccess} />
        </div>
    );
};

export default CheckoutPage;