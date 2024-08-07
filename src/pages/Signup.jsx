import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../AuthContext';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("https://assignment-backend-bu2u.onrender.com/api/signup", { email, password });
      const data = res.data;

      if (res.status === 200) {
        navigate("/login");
      } else if (res.status === 500 || res.status === 400) {
        console.error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error.response?.data || error.message);
    }
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form
        onSubmit={handleSignup}
        className="bg-white rounded-lg p-5 shadow-2xl shadow-slate-500 flex flex-col gap-3 w-[60vw] lg:w-[20vw] text-sm"
      >
        <span className="text-lg text-gray-600 -mb-1 text-center">Signup</span>
        <input
          type="email"
          name="email"
          id="email"
          className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black"
          autoComplete="off"
          placeholder="enter email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          className="outline-none border rounded-md px-3 py-2 focus:border-yellow-500 text-black"
          autoComplete="off"
          placeholder="enter password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="outline-none border rounded-md px-3 py-2 text-black bg-yellow-500 hover:bg-yellow-300 cursor-pointer"
        >
          Signup
        </button>
        <p className="text-xs text-gray-600 flex -mt-1 gap-2">
          <span>Or</span>
          <Link
            to="/login"
            className="text-black hover:underline hover:text-blue-700 cursor-pointer"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;
