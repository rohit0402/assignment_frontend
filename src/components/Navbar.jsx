import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, isAdmin, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await axios.get("https://assignment-backend-bu2u.onrender.com/api/logout", { withCredentials: true });
      logout();
      navigate("/signup");
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <div className='flex justify-between items-center bg-white gap-5 px-1 m-0.5 py-3 shadow-md rounded-lg'>
      <h4 className='font-bold text-3xl font-mono ml-4 px-2'>Quadri</h4>
      <ul className='flex space-x-4 font-bold text-lg mr-4 px-2'>
        <Link to="/">Home</Link>
        {!isLoggedIn && <Link to="/signup">Signup</Link>}
        {!isLoggedIn && <Link to="/login">Login</Link>}
        {isLoggedIn && isAdmin && <Link to="/dashboard">Dashboard</Link>}
        {isLoggedIn && <li onClick={handleLogout} className='cursor-pointer'>Logout</li>}
      </ul>
    </div>
  );
}

export default Navbar;
