// src/components/Header.jsx
import React from 'react';
import headerImg from "../assets/header.jpg";

function Header() {
  return (
    <header style={{
      backgroundImage: `url(${headerImg})`,
      height: '500px',
      backgroundSize: '75%', // Set background size to 75%
      backgroundPosition: 'center', // Center the image
      backgroundRepeat: 'no-repeat', // Prevent the image from repeating
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: "1px",
      backgroundColor: "white"
    }}>
      <h1 style={{
        color: '#003366', // Dark navy blue for better contrast
        textAlign: 'center',
        marginBottom: "450px",
        borderRadius: "10px",
        fontSize: "40px",
        backgroundColor: "white",
        width: "100%"
      }}>
        <b>Find And Book A Great Experience</b>
      </h1>
    </header>
  );
}

export default Header;