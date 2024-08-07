import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token'); // Check if the token exists in cookies
    const adminStatus = localStorage.getItem('isAdmin') === 'true'; // Get admin status from local storage
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true'; // Get login status from local storage
    if (token && loggedInStatus) {
      setIsLoggedIn(true);
      setIsAdmin(adminStatus);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const login = (token, adminStatus) => {
    Cookies.set('token', token, { expires: 1 }); // Store token in cookies
    localStorage.setItem('isAdmin', adminStatus.toString()); // Store admin status in local storage
    localStorage.setItem('isLoggedIn', 'true'); // Store login status in local storage
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const logout = () => {
    Cookies.remove('token'); // Remove token from cookies
    localStorage.removeItem('isAdmin'); // Remove admin status from local storage
    localStorage.removeItem('isLoggedIn'); // Remove login status from local storage
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
