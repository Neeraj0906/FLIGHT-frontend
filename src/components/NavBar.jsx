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
        <nav className="bg-teal-600">
            <div className="max-w-screen-2xl flex items-center justify-between mx-auto p-4 text-white">
                <Link className="flex items-center" to="/">
                    <img src={favicon} alt="Favicon" className="h-8 mr-2 rounded-full" /> {/* Favicon image */}
                    <b className="text-xl">Flights.com</b>
                </Link>
                <div className="flex space-x-4">
                    {!isAuthenticated() && (
                        <>
                            <Link className="hover:text-gray-200" to="/register">Register</Link>
                            <Link className="hover:text-gray-200" to="/login">Login</Link>
                        </>
                    )}
                    <Link className="hover:text-gray-200" to="/">Home</Link> {/* Home link */}
                    {isAuthenticated() && (
                        <>
                            <Link className="hover:text-gray-200" to="/dashboard"><b>Dashboard</b></Link>
                            <button onClick={handleLogout} className="hover:text-gray-200">
                                <b>Logout</b>
                            </button>
                        </>
                    )}
                    {isAuthenticated() && (  /* Show Tours link only if authenticated */
                        <Link className="hover:text-gray-200" to="/tours"><b>Tours</b></Link> 
                    )}
                </div>
            </div>
        </nav>
    );
}