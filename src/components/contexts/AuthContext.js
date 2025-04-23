import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // You might fetch initial user data here

  const login = (userData) => {
    setUser(userData);
    // Implement your login logic (e.g., API call)
    console.log('Logged in:', userData);
  };

  const logout = () => {
    setUser(null);
    // Implement your logout logic (e.g., API call)
    console.log('Logged out');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};