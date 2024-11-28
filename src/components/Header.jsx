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
      marginTop: "80px",
    }}>
      <b><h1 style={{
        color: 'black',
        textAlign: 'center',
        marginBottom:"480px",
        fontSize:"50px"
      }}>Find And Book<br />A Great Experience</h1></b>
    </header>
  );
}

export default Header;