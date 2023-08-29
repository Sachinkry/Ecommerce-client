// UserContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const useUserInfo = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});

  // Load initial user data from local storage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user')) || {};
    setUser(storedUser);
  }, []);

  const updateUserData = (user) => {
    // Update user data in local storage
    localStorage.setItem('user', JSON.stringify(user));
    // Update user data in state
    setUser(user);
  };

  return (
    <UserContext.Provider value={{ user, updateUserData }}>
      {children}
    </UserContext.Provider>
  );
};
