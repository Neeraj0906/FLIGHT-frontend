// src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://flight-backend-twe1.onrender.com/api/users/login', {
        email,
        password,
      });
      alert('Login successful');
      localStorage.setItem('token', response.data.token); // Store JWT token in local storage
      onLogin(); // Call the onLogin function passed as a prop to update app state
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Failed to log in: ' + error.response?.data?.error || error.message);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#2c3e50', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '20px auto', height:"250px", overflow:"hidden" }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#ecf0f1', fontSize: "24px" }}><b>Login</b></h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1', color:"#ecf0f1", backgroundColor:"#34495e" }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ecf0f1', color:"#ecf0f1", backgroundColor:"#34495e" }}
        />
        <button type="submit" style={{
          padding: '10px',
          backgroundColor: '#007bff',
          color:'#fff',
          borderRadius:'5px',
          border:'none',
          cursor:'pointer',
          fontWeight:'bold'
        }}><b>Login</b></button>
      </form>
    </div>
  );
}

export default Login;