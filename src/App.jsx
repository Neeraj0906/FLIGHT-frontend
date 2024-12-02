// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import NavBar
import Home from './components/Home'; // Import Home component
import Register from './components/Register';
import Login from './components/Login';
import UserDashboard from './components/UserDashboard';
import CheckoutPage from './components/CheckoutPage'; // Import CheckoutPage
import FeaturedTours from './components/FeaturedTours'; // Import FeaturedTours
import { Elements } from '@stripe/react-stripe-js';
import { stripePromise } from './stripe'; // Import stripePromise

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    const logoutUser = () => {
        localStorage.removeItem('token'); // Clear token on logout
        setIsLoggedIn(false); // Update login state
    };

    return (
        <Router>
            <div>
                {/* <p>*Please use chrome browser*</p> */}
                <NavBar logoutUser={logoutUser} /> {/* Include NavBar */}
                {/* <h1>Flight Booking App</h1> */}
                <Routes>
                    {!isLoggedIn ? (
                        <>
                            <Route path="/" element={<><Register /><Login onLogin={handleLogin} /></>} />
                        </>
                    ) : (
                        <>
                            <Route path="/" element={<Home logoutUser={logoutUser} />} /> {/* Home route */}
                            <Route path="/dashboard" element={<UserDashboard />} />
                            <Route path="/checkout" element={
                                <Elements stripe={stripePromise}>
                                    <CheckoutPage />
                                </Elements>
                            } />
                            <Route path="/tours" element={<FeaturedTours />} /> {/* Route for Featured Tours */}
                        </>
                    )}
                    {/* Add routes for Register and Login if needed */}
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login onLogin={handleLogin} />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;