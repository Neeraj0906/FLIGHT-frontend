// src/components/Home.jsx
import React from 'react';
import { logout } from "../services/auth";
import NavBar from './NavBar';
import Header from './Header';
import SearchFlights from './SearchFlights';
import Plan from './Plan';
import Memories from './Memories';
import FeaturedTours from './FeaturedTours';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout(); // Call the logout function
    navigate('/login'); // Navigate to the login page after logging out
  };

  return (
    <>
      {/* <NavBar logoutUser={logoutUser} /> */}
      <Header/>
      <SearchFlights/>
      <Plan/>
      <Memories/>
      <FeaturedTours />
      <Footer />
    </>
  );
};

export default Home;