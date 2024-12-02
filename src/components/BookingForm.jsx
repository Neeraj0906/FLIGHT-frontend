// src/components/BookingForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function BookingForm({ flight }) {
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token'); // Get JWT from local storage

        if (!token) {
            alert('You must be logged in to book a flight.');
            return;
        }

        // Prepare booking data
        const bookingData = {
            flightId: flight.id,
            adults,
            children,
            departureDate: flight.itineraries[0]?.segments[0]?.departure?.at, // Adjust based on actual structure
        };

        try {
            const response = await axios.post('https://flight-backend-twe1.onrender.com/api/bookings', bookingData, {
                headers: {
                    Authorization: `Bearer ${token}`, // Include JWT in headers
                },
            });

            alert('Booking successful: ' + response.data.message);
            
            // Navigate to the checkout page after successful booking with booking details
            navigate('/checkout', { state: { bookingDetails: bookingData } }); // Pass booking data as state
        } catch (error) {
            console.error('Error creating booking:', error);
            alert('Failed to create booking: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#2c3e50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', maxWidth: '400px', margin: '20px auto' }}>
            <h2 style={{ textAlign: 'center', color: '#ecf0f1' }}>Book Flight</h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="number"
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    min="1"
                    required
                    placeholder="Number of Adults"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ecf0f1',
                        color: "#ecf0f1",
                        backgroundColor:"#34495e",
                        fontSize: '16px'
                    }}
                />
                <input
                    type="number"
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    min="0"
                    placeholder="Number of Children"
                    style={{
                        padding: '10px',
                        borderRadius: '5px',
                        border: '1px solid #ecf0f1',
                        color:"#ecf0f1",
                        backgroundColor:"#34495e",
                        fontSize: '16px'
                    }}
                />
                <button type="submit" style={{
                    padding: '10px',
                    backgroundColor: '#28a745', // Green color for the button
                    color: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: 'bold'
                }}>Confirm Booking</button>
            </form>
        </div>
    );
}

export default BookingForm;