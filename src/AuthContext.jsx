import React, { createContext, useState, useContext, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = Cookies.get('token'); 
    const adminStatus = localStorage.getItem('isAdmin') === 'true';
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true'; 
    if (token && loggedInStatus) {
      setIsLoggedIn(true);
      setIsAdmin(adminStatus);
    } else {
      setIsLoggedIn(false);
      setIsAdmin(false);
    }
  }, []);

  const login = (token, adminStatus) => {
    Cookies.set('token', token, { expires: 1 }); 
    localStorage.setItem('isAdmin', adminStatus.toString()); 
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
  };

  const logout = () => {
    Cookies.remove('token'); 
    localStorage.removeItem('isAdmin'); 
    localStorage.removeItem('isLoggedIn'); 
    setIsLoggedIn(false);
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;