import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userType, setUserType] = useState(null); // 'doctor', 'admin', 'guest'

  const login = (email, password, type) => {
    // Mock authentication
    if (type === 'admin' && email === 'admin@medicine.com' && password === 'admin123') {
      setUser({ email, name: 'Admin' });
      setUserType('admin');
      return true;
    } else if (type === 'doctor' && password.length >= 6) {
      setUser({ email, name: email.split('@')[0] });
      setUserType('doctor');
      return true;
    }
    return false;
  };

  const register = (email, password, name) => {
    if (email && password.length >= 6 && name) {
      setUser({ email, name });
      setUserType('doctor');
      return true;
    }
    return false;
  };

  const loginAsGuest = () => {
    setUser({ email: 'guest@example.com', name: 'Guest User' });
    setUserType('guest');
  };

  const logout = () => {
    setUser(null);
    setUserType(null);
  };

  return (
    <AuthContext.Provider value={{ user, userType, login, register, loginAsGuest, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
