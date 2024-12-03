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
  const [selectedFlight, setSelectedFlight] = useState(null);
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

      console.log("Flight Search Response:", response.data.data);
      setFlights(response.data.data);
    } catch (error) {
      console.error("Error fetching flights:", error);
    }
  };

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

  const handleSuggestionClick = (code) => {
    setOrigin(code);
    setOriginSuggestions([]);
  };

  const handleDestinationSuggestionClick = (code) => {
    setDestination(code);
    setDestinationSuggestions([]);
  };

  return (
    <div className="p-10 bg-gray-800 rounded-lg shadow-lg">
      <h1 className="text-center text-3xl font-bold text-white mb-6">Search Flights</h1>
      <form onSubmit={handleSearch} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Origin IATA Code (e.g., SYD)"
          value={origin}
          onChange={handleOriginChange}
          required
          className="p-3 rounded border border-gray-300 text-gray-200 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Suggestions for Origin */}
        {originSuggestions.length > 0 && (
          <ul className="list-none p-0 mt-2 bg-green-500 rounded-md shadow-md">
            {originSuggestions.map((iata) => (
              <li key={iata.code} onClick={() => handleSuggestionClick(iata.code)} className="p-2 cursor-pointer hover:bg-green-600">
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
          className="p-3 rounded border border-gray-300 text-gray-200 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        {/* Suggestions for Destination */}
        {destinationSuggestions.length > 0 && (
          <ul className="list-none p-0 mt-2 bg-green-500 rounded-md shadow-md">
            {destinationSuggestions.map((iata) => (
              <li key={iata.code} onClick={() => handleDestinationSuggestionClick(iata.code)} className="p-2 cursor-pointer hover:bg-green-600">
                {iata.code} - {iata.city}
              </li>
            ))}
          </ul>
        )}
        
        <label className="text-gray-200 font-bold">
          Departure Date:
          <input
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            required
            className="ml-2 p-2 rounded border border-gray-300"
          />
        </label>
        <label className="text-gray-200 font-bold">
          Number of Adults:
          <input
            type="number"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            min="1"
            required
            className="ml-2 p-2 rounded border border-gray-300"
          />
        </label>
        <label className="text-gray-200 font-bold">
          Number of Children:
          <input
            type="number"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            min="0"
            className="ml-2 p-2 rounded border border-gray-300"
          />
        </label>
        <button type="submit" className="py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-200 font-bold">
          Search Flights
        </button>
      </form>

      {/* Display available flights */}
      {flights.length > 0 && (
        <div className="mt-6">
          <h2 className="text-center text-xl text-white">Available Flights</h2>
          <ul className="list-none p-0">
            {flights.map((flight) => (
              <li key={flight.id} className="bg-gray-700 text-white p-4 mb-4 rounded-md shadow-md flex justify-between items-center">
                <span>
                  <strong>Flight ID:</strong> {flight.id}, 
                  <strong> Price:</strong> ${flight.price.total}, 
                  <strong> Departure Date:</strong> {new Date(flight.departureDate).toLocaleString()}
                </span>
                <button onClick={() => setSelectedFlight(flight)} className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition duration-200">
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