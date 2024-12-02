// src/components/Footer.jsx
import React from 'react';
import facebookIcon from '../assets/facebook.jpg'; // Ensure the path is correct
import instagramIcon from '../assets/instagram.png'; // Ensure the path is correct
import twitterIcon from '../assets/twitter.png'; // Ensure the path is correct
import youtubeIcon from '../assets/youtube.png'; // Ensure the path is correct

function Footer() {
  return (
    <footer style={{
      backgroundColor: '#343a40',
      color: '#ffffff',
      paddingTop: '30px',
      paddingBottom: '30px',
      position: 'relative', // Enable positioning for child elements
      height: "230px",
      marginTop: "10px",
      width: "100%",
      borderRadius: "10px"
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '0 20px'
      }}>
        <div style={{ width: '30%' }}>
          <h3 style={{ color: '#ffffff', fontSize: "25px", fontWeight: "bold" }}>Flivan</h3>
          <p>
            Where Excellence Takes Flight. With a strong commitment to customer satisfaction and a passion for air travel, Flivan Airlines offers exceptional service and seamless journeys.
          </p>
        </div>
        <div style={{ width: '30%' }}>
          <h4 style={{ color: '#ffffff', fontSize: "20px", fontWeight: "bold" }}>INFORMATION</h4>
          {['Home', 'About', 'Offers', 'Seats', 'Destinations'].map((item) => (
            <p key={item} style={{ color: '#ffffff' }}>{item}</p>
          ))}
        </div>
        <div style={{ width: '30%' }}>
          <h4 style={{ color: '#ffffff', fontSize: "20px", fontWeight: "bold" }}>CONTACT</h4>
          {['Support', 'Media', 'Socials'].map((item) => (
            <p key={item} style={{ color: '#ffffff' }}>{item}</p>
          ))}
        </div>
      </div>

      {/* Copyright Section */}
      <div style={{
        textAlign: 'left',
        marginTop: '10px',
        position: 'absolute',
        bottom: '0px', // Position above social icons
        left: '20px'
      }}>
        <p>Copyright © 2023 Web Design Mastery. All rights reserved.</p>
      </div>

      {/* Social Media Icons Section */}
      <div style={{
        textAlign: 'right',
        position: 'absolute',
        bottom: '20px', // Position at the bottom
        right: '260px', display:"flex"
      }}>
        {[
          { name: 'Facebook', icon: facebookIcon },
          { name: 'Twitter', icon: twitterIcon },
          { name: 'Instagram', icon: instagramIcon },
          { name: 'YouTube', icon: youtubeIcon }
        ].map((platform) => (
          <img key={platform.name} src={platform.icon} alt={platform.name} 
            style={{ width: '24px', height: '24px', marginLeft: '10px' ,borderRadius:"50%"}} /> // Adjust size as needed
        ))}
      </div>
    </footer>
  );
}

export default Footer;