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
            // Replace localhost URL with your Render backend URL
            const response = await axios.post('https://flight-backend-twe1.onrender.com/api/users/register', {
                username,
                email,
                password,
            });
            alert('Registration successful: ' + response.data.message);
            
            // Navigate to the login page after successful registration
            navigate('/login'); // Change this to the appropriate route for your login page
        } catch (error) {
            console.error('Error registering user:', error);
            alert('Failed to register: ' + (error.response?.data?.error || error.message));
        }
    };

    return (
        <div style={{ padding: '40px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', maxWidth: '400px', margin: '50px auto' }}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333', fontSize:"20px" }}><b>Register</b></h2>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ padding: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
                />
                <button type="submit" style={{
                    padding: '10px',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    borderRadius: '5px',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                }}>Register</button>
            </form>
        </div>
    );
}

export default Register;