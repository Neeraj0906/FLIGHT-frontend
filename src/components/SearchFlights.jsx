// src/components/SearchFlights.jsx
import React, { useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm"; // Import the BookingForm component

function SearchFlights() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null); // State for selected flight

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(
        "https://flight-backend-twe1.onrender.com/api/flights/search",
        {
          params: {
            originLocationCode: origin,
            destinationLocationCode: destination,
            departureDate,
            adults,
            children,
          },
        }
      );

      console.log("Flight Search Response:", response.data.data); // Log response data
      setFlights(response.data.data); // Assuming the flight data is in response.data.data
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#bee3f8', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)',width:"82%", marginLeft:"9%"}}>
      <b><h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize:"30px" }}><b>Search Flights</b></h1></b>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Origin IATA Code (e.g., SYD)"
          value={origin}
          onChange={(e) => setOrigin(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input
          type="text"
          placeholder="Destination IATA Code (e.g., BKK)"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <label style={{ fontWeight: 'bold' }}>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          Number of Adults:
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            required
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <label style={{ fontWeight: 'bold' }}>
          Number of Children:
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
          />
        </label>
        <button type="submit" style={{
          padding: '10px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}><b>Search Flights</b></button>
      </form>

      {flights.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h2 style={{ textAlign: 'center' }}>Available Flights</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {flights.map((flight) => (
              <li key={flight.id} style={{
                backgroundColor: '#fff',
                padding: '15px',
                marginBottom: '10px',
                borderRadius: '8px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                Flight ID: {flight.id}, Price: {flight.price.total}, Departure Date:
                {flight.departureDate}
                <button onClick={() => setSelectedFlight(flight)} style={{
                  padding:'5px 10px',
                  backgroundColor:'#28a745',
                  color:'#fff',
                  border:'none',
                  borderRadius:'5px',
                  cursor:'pointer'
                }}>
                  Book Flight
                </button>
              </li>
            ))}
          </ul>

          {/* Show Booking Form if a flight is selected */}
          {selectedFlight && <BookingForm flight={selectedFlight} />}
        </div>
      )}
    </div>
  );
}

export default SearchFlights;