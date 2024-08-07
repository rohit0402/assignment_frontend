import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=' flex justify-between items-center bg-white gap-5 px-1 m-0.5 py-3 shadow-md rounded-lg ' >
      <h4 className='font-bold text-3xl font-mono ml-4 px-2'>Quadri</h4>
      
      <ul className=' flex space-x-4 font-bold text-lg mr-4 px-2'>
        <Link to="/">Home</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <li>Logout</li>
      </ul>
    </div>
  )
}

export default Navbar;
