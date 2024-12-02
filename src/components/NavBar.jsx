// src/components/NavBar.jsx
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../services/auth"; // Ensure this path is correct
import favicon from "../assets/favicon.jpg"; // Import the favicon image

export default function NavBar(props) { 
    const navigate = useNavigate();

    const handleLogout = () => {
        props.logoutUser(); // Call logout function passed as a prop
        navigate('/'); // Redirect to home after logout
    };

    return (
        <nav className="navbar">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 mt-0 text-xl" style={{ backgroundColor: '#00796b', borderRadius: '1px', color: '#ffffff' }}>
                <Link className="navbar-brand" to="/" style={{ display: 'flex', alignItems: 'center', color: '#ffffff' }}>
                    <img src={favicon} alt="Favicon" style={{ height: '30px', marginRight: '10px', borderRadius:"50%" }} /> {/* Favicon image */}
                    <b>Flights.com</b>
                </Link>
                <div className="navbar-nav" style={{ display: 'flex', gap: '20px', marginLeft: '10px' }}>
                    {!isAuthenticated() && (
                        <>
                            <Link className="nav-link" to="/register" style={{ margin: '0 10px', color: '#ffffff' }}>Register</Link>
                            <Link className="nav-link" to="/login" style={{ margin: '0 10px', color: '#ffffff' }}>Login</Link>
                        </>
                    )}
                    <Link className="nav-link" to="/" style={{ margin: '0 10px', color: '#ffffff' }}><b>Home</b></Link> {/* Home link */}
                    {isAuthenticated() && (
                        <>
                            <Link className="nav-link" to="/dashboard" style={{ margin: '0 10px', color: '#ffffff' }}><b>Dashboard</b></Link>
                            <a className="nav-link" onClick={handleLogout} style={{ cursor: "pointer", margin: '0 10px', color: '#ffffff' }}><b>Logout</b></a>
                        </>
                    )}
                    {isAuthenticated() && (  /* Show Tours link only if authenticated */
                        <Link className="nav-link" to="/tours" style={{ margin: '0 10px', color: '#ffffff' }}><b>Tours</b></Link> 
                    )}
                </div>
            </div>
        </nav>
    );
}