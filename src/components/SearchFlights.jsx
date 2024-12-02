// src/components/SearchFlights.jsx
import React, { useState } from "react";
import axios from "axios";
import BookingForm from "./BookingForm"; // Import the BookingForm component

// Sample IATA codes for demonstration
const iataCodes = [
  { code: "SYD", city: "Sydney, Australia" },
  { code: "BKK", city: "Bangkok, Thailand" },
  { code: "LAX", city: "Los Angeles, USA" },
  { code: "JFK", city: "New York City, USA" },
  { code: "DXB", city: "Dubai, UAE" },
  { code: "HKG", city: "Hong Kong" },
  { code: "LHR", city: "London, UK" },
  { code: "PAR", city: "Paris, France" },
  { code: "SIN", city: "Singapore" },
  { code: "FRA", city: "Frankfurt, Germany" },
];

function SearchFlights() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [flights, setFlights] = useState([]);
  const [selectedFlight, setSelectedFlight] = useState(null); // State for selected flight
  const [originSuggestions, setOriginSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);

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

  // Function to handle input change for origin
  const handleOriginChange = (e) => {
    const value = e.target.value;
    setOrigin(value);
    if (value) {
      const filteredSuggestions = iataCodes.filter(iata =>
        iata.code.toLowerCase().includes(value.toLowerCase())
      );
      setOriginSuggestions(filteredSuggestions);
    } else {
      setOriginSuggestions([]);
    }
  };

  // Function to handle input change for destination
  const handleDestinationChange = (e) => {
    const value = e.target.value;
    setDestination(value);
    if (value) {
      const filteredSuggestions = iataCodes.filter(iata =>
        iata.code.toLowerCase().includes(value.toLowerCase())
      );
      setDestinationSuggestions(filteredSuggestions);
    } else {
      setDestinationSuggestions([]);
    }
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (code) => {
    setOrigin(code);
    setOriginSuggestions([]);
  };

  // Function to handle destination suggestion click
  const handleDestinationSuggestionClick = (code) => {
    setDestination(code);
    setDestinationSuggestions([]);
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#2c3e50', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', width: "100%" }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', fontSize: "30px", color: '#ecf0f1' }}><b>Search Flights</b></h1>
      <form onSubmit={handleSearch} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="text"
          placeholder="Origin IATA Code (e.g., SYD)"
          value={origin}
          onChange={handleOriginChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1', color: "#ecf0f1", backgroundColor:"#34495e" }} // Dark background for input
        />
        {/* Suggestions for Origin */}
        {originSuggestions.length > 0 && (
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '5px', backgroundColor:'#32CD32', borderRadius:'5px', boxShadow:'0 2px 4px rgba(0,0,0,0.2)' }}>
            {originSuggestions.map((iata) => (
              <li key={iata.code} onClick={() => handleSuggestionClick(iata.code)} style={{ padding:'10px', cursor:'pointer' }}>
                {iata.code} - {iata.city}
              </li>
            ))}
          </ul>
        )}
        
        <input
          type="text"
          placeholder="Destination IATA Code (e.g., BKK)"
          value={destination}
          onChange={handleDestinationChange}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1', color:"#ecf0f1", backgroundColor:"#34495e" }} // Dark background for input
        />
        {/* Suggestions for Destination */}
        {destinationSuggestions.length > 0 && (
          <ul style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '5px', backgroundColor:'#32CD32', borderRadius:'5px', boxShadow:'0 2px 4px rgba(0,0,0,0.2)' }}>
            {destinationSuggestions.map((iata) => (
              <li key={iata.code} onClick={() => handleDestinationSuggestionClick(iata.code)} style={{ padding:'10px', cursor:'pointer' }}>
                {iata.code} - {iata.city}
              </li>
            ))}
          </ul>
        )}
        
        <label style={{ fontWeight: 'bold', color:"#ecf0f1" }}>
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1' }}
          />
        </label>
        <label style={{ fontWeight: 'bold', color:"#ecf0f1" }}>
          Number of Adults:
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            required
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1' }}
          />
        </label>
        <label style={{ fontWeight: 'bold', color:"#ecf0f1" }}>
          Number of Children:
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
            style={{ marginLeft: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1' }}
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
          <h2 style={{ textAlign: 'center', color:'#ecf0f1' }}>Available Flights</h2>
          <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
            {flights.map((flight) => (
              <li key={flight.id} style={{
                backgroundColor:'#fff',
                padding:'15px',
                marginBottom:'10px',
                borderRadius:'8px',
                boxShadow:'0 2px 4px rgba(0,0,0,0.1)',
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
              }}>
                Flight ID:{flight.id}, Price:{flight.price.total}, Departure Date:
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