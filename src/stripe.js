// src/stripe.js
import { loadStripe } from '@stripe/stripe-js';

// Replace with your own publishable key from Stripe
const stripePromise = loadStripe('pk_test_51QPM2hJX8Y9dfdB6yON7TsjoJYYsbL2CyRQSQjA2shsaO9PH3umBwRO9YCL4yhsAYsdBFZmDc6wM2U3jJlXJ3nXt00vNEomvhm');

export { stripePromise };