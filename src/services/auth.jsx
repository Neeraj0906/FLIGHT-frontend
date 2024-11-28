// src/services/auth.jsx

export const isAuthenticated = () => {
    const token = localStorage.getItem('token'); // Check for token in local storage
    return !!token; // Return true if token exists, false otherwise
};

export const logout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
};