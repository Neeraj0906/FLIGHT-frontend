// src/components/UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserDashboard() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get('https://flight-backend-twe1.onrender.com/api/bookings', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setBookings(response.data); // Assuming your API returns an array of bookings
      } catch (error) {
        console.error('Error fetching bookings:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [token]);

  const handleDelete = async (bookingId) => {
    try {
      await axios.delete(`https://flight-backend-twe1.onrender.com/api/bookings/${bookingId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Remove the deleted booking from state
      setBookings(bookings.filter(booking => booking._id !== bookingId));
      alert('Booking deleted successfully.');
    } catch (error) {
      console.error('Error deleting booking:', error);
      alert('Failed to delete booking.');
    }
  };

  if (loading) return <div style={{ textAlign: 'center', padding: '20px' }}>Loading...</div>;

  return (
    <div style={{ padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#333' }}>Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
          {bookings.map((booking) => (
            <li key={booking._id} style={{
              backgroundColor: '#fff',
              padding: '15px',
              marginBottom: '10px',
              borderRadius: '8px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
              display:'flex',
              justifyContent:'space-between',
              alignItems:'center'
            }}>
              <div>
                <p><strong>Flight ID:</strong> {booking.flightId}</p>
                <p><strong>Adults:</strong> {booking.adults}</p>
                <p><strong>Children:</strong> {booking.children}</p>
                <p><strong>Departure Date:</strong> {new Date(booking.departureDate).toLocaleString()}</p>
              </div>
              <button onClick={() => handleDelete(booking._id)} style={{
                padding:'5px 10px',
                backgroundColor:'#dc3545',
                color:'#fff',
                border:'none',
                borderRadius:'5px',
                cursor:'pointer'
              }}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserDashboard;