// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Initialize navigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://flight-backend-twe1.onrender.com/api/users/register', {
                username,
                email,
                password,
            });
            alert('Registration successful: ' + response.data.message);
            navigate('/login'); // Navigate to the login page after successful registration
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register: ' + error.response?.data?.error || error.message);
        }
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#e1f5fe', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '20px auto', height:"300px", overflow:"hidden" }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#00796b', fontSize: "24px" }}><b>Register</b></h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', color: "black" }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', color:"black" }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc', color:"black" }}
                />
                <button type="submit" style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color:'#fff',
                    borderRadius:'5px',
                    border:'none',
                    cursor:'pointer',
                    fontWeight:'bold'
                }}>Register</button>
            </form>
        </div>
    );
}

export default Register;